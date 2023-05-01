"""Encoder / Decoder"""
import ast
import json
import pickle
from typing import Any
from qiskit.result import Result
from qiskit.providers import Backend
from qiskit.circuit import QuantumCircuit
from qiskit.quantum_info.operators import Operator
from qiskit_ibm_runtime.utils import RuntimeEncoder, RuntimeDecoder


def filtered_attr(obj: Any) -> []:
    """Filter for Trial object def.
    Args:
        obj: Trial object.

    Returns:
        List of Trial attributes
    """
    return [
        name_elem
        for name_elem in dir(obj)
        if not name_elem.startswith("__")
        and not name_elem.startswith("add_")
        and not name_elem.startswith("save_")
        and not name_elem.startswith("read_")
        and not name_elem == "backend"
        and not name_elem == "name"
    ]


class FakeTrial:  # pylint: disable=too-few-public-methods)
    """Fake Trial object to avoid circular import."""

    def __init__(self, obj):
        """Fake Trial init."""
        for elem in obj.keys():
            setattr(self, elem, [])
        self.name = obj["name"]


class TrialEncoder(json.JSONEncoder):
    """Json encoder."""

    def default(self, obj):  # pylint: disable=arguments-renamed
        """Default encoder class."""
        trial_elem = filtered_attr(obj=obj)
        to_register = {
            "name": f"{obj.name}",
            **{
                f"{name_elem}": f"{self.tuple_encoder(getattr(obj, name_elem))}"
                for name_elem in trial_elem
            },
        }
        return to_register

    @staticmethod
    def tuple_encoder(trial_elem: Any) -> Any:
        """Rules for encoder."""
        to_append = []
        if len(trial_elem) == 0:
            return []
        if isinstance(trial_elem[0], tuple):
            for obj_tuple in trial_elem:
                if isinstance(obj_tuple[1], (str, int, float)):
                    to_append.append((obj_tuple[0], obj_tuple[1]))
                elif isinstance(obj_tuple[1], QuantumCircuit):
                    to_append.append(
                        (obj_tuple[0], json.dumps(obj_tuple[1], cls=RuntimeEncoder))
                    )
                elif isinstance(obj_tuple[1], Backend):
                    to_append.append((obj_tuple[0], pickle.dumps(obj_tuple[1])))
                elif isinstance(obj_tuple[1], Operator):
                    to_append.append(
                        (obj_tuple[0], json.dumps(obj_tuple[1], cls=RuntimeEncoder))
                    )
                elif isinstance(obj_tuple[1], Result):
                    to_append.append(
                        (obj_tuple[0], json.dumps(obj_tuple[1], cls=RuntimeEncoder))
                    )
                else:
                    to_append.append((obj_tuple[0], pickle.dumps(obj_tuple[1])))
        else:
            to_append = trial_elem

        return to_append


class TrialDecoder(json.JSONDecoder):
    """Json decoder."""

    def __init__(self, *args, **kwargs):
        """Decoder call."""
        json.JSONDecoder.__init__(self, object_hook=self.object_hook, *args, **kwargs)

    @staticmethod
    def object_hook(obj):  # pylint: disable=method-hidden
        """Rules for decoder."""
        new_trial = FakeTrial(obj)
        trial_elem = filtered_attr(obj=new_trial)
        for attr in trial_elem:
            to_value = []
            if len(ast.literal_eval(obj[attr])) == 0:
                setattr(new_trial, attr, to_value)

            elif attr == "circuits":
                for elem in ast.literal_eval(obj[attr]):
                    to_value.append((elem[0], json.loads(elem[1], cls=RuntimeDecoder)))
                setattr(new_trial, attr, to_value)
            elif attr == "qbackends":
                for elem in ast.literal_eval(obj[attr]):
                    to_value.append((elem[0], pickle.loads(elem[1])))
                setattr(new_trial, attr, to_value)
            elif attr == "operators":
                for elem in ast.literal_eval(obj[attr]):
                    to_value.append((elem[0], json.loads(elem[1], cls=RuntimeDecoder)))
                setattr(new_trial, attr, to_value)
            elif attr == "artifacts":
                for elem in ast.literal_eval(obj[attr]):
                    to_value.append((elem[0], pickle.loads(elem[1])))
                setattr(new_trial, attr, to_value)
            elif attr == "arrays":
                for elem in ast.literal_eval(obj[attr]):
                    to_value.append((elem[0], json.loads(elem[1], cls=RuntimeDecoder)))
                setattr(new_trial, attr, to_value)

            else:
                setattr(new_trial, attr, ast.literal_eval(obj[attr]))

        return new_trial