Search.setIndex({"docnames": ["apidocs/index", "guides/01_tracking_quantum_experiments", "guides/02_widget", "guides/03_tracking_qubo", "guides/04_setup_api", "guides/index", "index", "stubs/purplecaffeine.ApiStorage", "stubs/purplecaffeine.BaseStorage", "stubs/purplecaffeine.LocalStorage", "stubs/purplecaffeine.Trial"], "filenames": ["apidocs/index.rst", "guides/01_tracking_quantum_experiments.ipynb", "guides/02_widget.ipynb", "guides/03_tracking_qubo.ipynb", "guides/04_setup_api.ipynb", "guides/index.rst", "index.rst", "stubs/purplecaffeine.ApiStorage.rst", "stubs/purplecaffeine.BaseStorage.rst", "stubs/purplecaffeine.LocalStorage.rst", "stubs/purplecaffeine.Trial.rst"], "titles": ["PurpleCaffeine API References", "Guide: Tracking quantum experiments", "Guide: widget", "Guide: Tracking QUBO experiments", "Guide: Setting up the API server", "&lt;no title&gt;", "PurpleCaffeine", "purplecaffeine.ApiStorage", "purplecaffeine.BaseStorage", "purplecaffeine.LocalStorage", "purplecaffeine.Trial"], "terms": {"In": [1, 3, 4], "thi": [1, 2, 3, 4], "we": [1, 3, 4], "show": [1, 2, 3, 4, 6], "you": [1, 3, 4], "how": [1, 3, 4], "keep": 1, "your": 1, "first": [1, 3, 4], "introduc": 1, "glossari": 1, "trial": [1, 2, 3, 4, 6, 9], "i": [1, 2, 4, 6], "class": [1, 7, 8, 9, 10], "which": 1, "wrap": 1, "singl": 1, "execut": 1, "storag": [1, 2, 3, 4, 6, 7, 8, 9, 10], "respons": [1, 4], "store": [1, 6, 9], "data": [1, 2, 3, 4, 6, 9, 10], "simpl": [1, 3], "exampl": [1, 2, 6, 7, 9], "measur": 1, "expect": 1, "valu": [1, 2, 6], "an": 1, "observ": 1, "all": 1, "inform": 1, "about": 1, "let": [1, 3], "": [1, 3, 4], "start": [1, 4], "import": [1, 2, 3, 6], "necessari": 1, "modul": 1, "1": [1, 2, 3, 4, 6], "o": [1, 4], "from": [1, 2, 3, 6], "qiskit": [1, 2, 3, 6], "circuit": [1, 2, 3, 4, 6, 10], "random": [1, 2, 6], "random_circuit": [1, 2, 6], "quantum_info": [1, 2, 6], "random_pauli": [1, 2, 6], "primit": [1, 2, 3, 6], "estim": [1, 2, 6], "purplecaffein": [1, 2, 3, 4], "core": [1, 2, 6], "localstorag": [1, 2, 3, 6], "next": [1, 4], "need": [1, 4], "defin": 1, "some": [1, 3, 4, 6], "variabl": [1, 3, 4], "2": [1, 2, 3, 4, 6], "n_qubit": [1, 2, 6], "4": [1, 2, 3, 6], "depth": [1, 2, 6], "3": [1, 2, 3, 6], "shot": [1, 2, 6], "2000": [1, 2, 6], "draw": 1, "fold": 1, "q_0": 1, "x": [1, 3, 4], "q_1": 1, "rz": 1, "2568": 1, "tdg": 1, "q_2": 1, "9296": 1, "0": [1, 2, 4, 6], "ryi": 1, "5": [1, 2, 3], "7992": 1, "q_3": 1, "u3": 1, "057242": 1, "0814": 1, "8183": 1, "ob": [1, 2, 4, 6], "pauli": [1, 4, 10], "39": 1, "yiiz": 1, "also": 1, "place": 1, "where": 1, "our": [1, 3], "us": [1, 3, 4], "local": [1, 6, 9], "folder": [1, 6, 9], "configur": 1, "set": [1, 6], "local_storag": [1, 2, 3, 6], "could": 1, "api": [1, 7], "s3": 1, "call": 1, "api_storag": 1, "apistorag": [1, 6], "host": [1, 7], "http": [1, 4, 7], "localhost": [1, 4, 7], "8000": [1, 4, 7], "usernam": [1, 4, 7], "my_usernam": 1, "password": [1, 4, 7], "my_pass": 1, "s3_storag": 1, "s3storag": 1, "bucket": 1, "access_kei": 1, "my_kei": 1, "secret_access_kei": 1, "my_secret": 1, "order": 1, "action": 1, "work": 1, "give": 1, "name": [1, 3, 4, 10], "pass": 1, "option": [1, 4, 7, 9], "context": [1, 6], "python": 1, "statement": 1, "within": 1, "can": [1, 3, 4], "list": [1, 3, 10], "differ": 1, "method": [1, 7, 8, 9, 10], "object": [1, 3, 6], "them": 1, "ar": 1, "add_paramet": [1, 2, 3, 6], "add": 1, "paramet": [1, 2, 3, 4, 6, 7, 9, 10], "number": [1, 10], "qubit": [1, 10], "etc": 1, "add_metr": [1, 2, 3, 6], "metric": [1, 2, 4, 10], "repres": 1, "outcom": 1, "ex": 1, "histori": [1, 2], "vqe": [1, 6], "iter": 1, "result": [1, 2, 3, 4, 6, 10], "add_circuit": [1, 2, 3, 6], "understand": 1, "what": 1, "add_oper": [1, 2, 6], "oper": [1, 2, 4, 10], "interest": [1, 6], "run": [1, 2, 3, 4, 6], "exp_valu": [1, 2, 6], "item": [1, 2, 6], "get": 1, "6": [1, 3], "lt": [1, 3], "88b5ef54": 1, "a66b": 1, "45e1": 1, "aed8": 1, "c7db7ad82594": 1, "gt": [1, 3], "b418c1d2": 1, "11d7": 1, "424a": 1, "bef8": 1, "8c5c8d9976aa": 1, "b47737a7": 1, "deac": 1, "46ae": 1, "af11": 1, "5bd587c0b688": 1, "2ef8eaca": 1, "0fd5": 1, "4e21": 1, "9257": 1, "1e080ed85ed2": 1, "quieri": 1, "exist": 1, "7": [1, 3], "random_tri": 1, "trial_uuid": 1, "uuid": [1, 4, 10], "numpi": 2, "np": [2, 10], "basestorag": [2, 6], "10": 2, "rang": 2, "str": [2, 7, 9, 10], "track": [2, 6, 10], "anoth": 2, "idx": [2, 3], "f": 2, "tag": [2, 4, 10], "add_tag": 2, "text": [2, 4, 10], "add_text": [2, 3], "one": 2, "displai": 2, "tab": 2, "two": 2, "well": [2, 3], "_": 2, "100": 2, "randint": 2, "solv": 3, "algorithm": 3, "minimum_eigensolv": 3, "samplingvq": 3, "optim": 3, "cobyla": 3, "sampler": 3, "qiskit_optim": 3, "minimumeigenoptim": 3, "librari": 3, "twoloc": 3, "quadraticprogram": 3, "creat": [3, 7, 9], "problem": 3, "qubo_tri": 3, "binary_var": 3, "y": 3, "z": 3, "minim": 3, "linear": 3, "quadrat": 3, "print": 3, "prettyprint": 3, "subject": 3, "No": 3, "constraint": 3, "binari": 3, "setup": [3, 4], "now": 3, "regist": 3, "algo": 3, "useful": 3, "export_as_lp_str": 3, "qaoa_m": 3, "callback": 3, "lambda": 3, "param": 3, "mean": 3, "std": 3, "qaoa_histori": 3, "qaoa_result": 3, "ansatz": 3, "rotation_block": 3, "ry": 3, "entanglement_block": 3, "cz": 3, "too": 3, "save": 3, "vqe_m": 3, "vqe_histori": 3, "vqe_result": 3, "And": 3, "see": 3, "both": 3, "671b7bc5": 3, "58c2": 3, "4162": 3, "8756": 3, "bddca2a71548": 3, "e37d36e9": 3, "f9b0": 3, "4721": 3, "8b85": 3, "ad8b1784e9": 3, "To": 4, "imag": 4, "have": 4, "postgress": 4, "databas": 4, "The": [4, 6], "expos": 4, "port": 4, "A": 4, "full": 4, "docker": 4, "compos": 4, "yml": 4, "github": [4, 6], "com": 4, "icekhan13": 4, "blob": 4, "main": 4, "__": 4, "provid": 4, "It": 4, "contain": 4, "postgr": 4, "Then": 4, "export": 4, "serv_kei": 4, "test": 4, "debug": 4, "default": 4, "allowed_host": 4, "db_name": 4, "db_user": 4, "root": 4, "db_password": 4, "purplecaffeinepassword": 4, "db_host": 4, "db_port": 4, "5432": 4, "db_schema": 4, "public": 4, "django_superuser_usernam": 4, "admin": [4, 7], "django_superuser_password": 4, "django_superuser_email": 4, "like": [4, 10], "so": 4, "p": 4, "e": 4, "latest": 4, "Or": 4, "file": [4, 10], "servic": 4, "container_nam": 4, "environ": 4, "adm": 4, "curl": 4, "h": 4, "content": [4, 6], "type": [4, 10], "applic": 4, "json": 4, "raw": 4, "refresh": 4, "access": 4, "author": 4, "bearer": 4, "access_token": 4, "id": 4, "descript": [4, 10], "count": 4, "null": 4, "previou": 4, "search": 4, "pagin": 4, "queri": 4, "term": 4, "offset": 4, "limit": 4, "20": 4, "accept": 4, "my": 4, "super": 4, "descipt": 4, "__type__": 4, "purplecaffeinebackend": 4, "nb_qubit": 4, "ubuntu": 4, "xzyi": 4, "artifact": [4, 10], "arrai": [4, 10], "put": 4, "softwar": 6, "quantum": [6, 10], "program": 6, "experi": [6, 10], "sourc": [6, 7, 8, 9, 10], "code": 6, "project": 6, "avail": 6, "quickstart": 6, "step": 6, "instal": 6, "packag": 6, "pip": 6, "script": 6, "py": 6, "widget": 6, "open": 6, "visual": 6, "document": 6, "home": 6, "qubo": 6, "qaoa": 6, "up": 6, "server": [6, 7], "none": [7, 9, 10], "apiserv": 7, "123": 7, "__init__": [7, 8, 9, 10], "base": 8, "path": 9, "short": 10, "union": 10, "int": 10, "float": 10, "env": 10, "detail": 10, "quantumcircuit": 10, "ani": 10, "extern": 10, "ndarrai": 10, "string": 10, "format": 10}, "objects": {"": [[0, 0, 0, "-", "purplecaffeine"]], "purplecaffeine": [[7, 1, 1, "", "ApiStorage"], [8, 1, 1, "", "BaseStorage"], [9, 1, 1, "", "LocalStorage"], [10, 1, 1, "", "Trial"]], "purplecaffeine.ApiStorage": [[7, 2, 1, "", "__init__"]], "purplecaffeine.BaseStorage": [[8, 2, 1, "", "__init__"]], "purplecaffeine.LocalStorage": [[9, 2, 1, "", "__init__"]], "purplecaffeine.Trial": [[10, 2, 1, "", "__init__"], [10, 3, 1, "", "arrays"], [10, 3, 1, "", "artifacts"], [10, 3, 1, "", "circuits"], [10, 3, 1, "", "description"], [10, 3, 1, "", "metrics"], [10, 3, 1, "", "operators"], [10, 3, 1, "", "parameters"], [10, 3, 1, "", "tags"], [10, 3, 1, "", "texts"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:attribute"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "attribute", "Python attribute"]}, "titleterms": {"purplecaffein": [0, 6, 7, 8, 9, 10], "api": [0, 4, 6], "refer": [0, 6], "guid": [1, 2, 3, 4, 6], "track": [1, 3], "quantum": 1, "experi": [1, 3, 4], "widget": 2, "qubo": 3, "qaoa": 3, "vqe": 3, "set": 4, "up": 4, "server": 4, "quickstart": 4, "automat": 4, "manual": 4, "document": 4, "get": 4, "token": 4, "all": 4, "post": 4, "updat": 4, "delet": 4, "apistorag": 7, "basestorag": 8, "localstorag": 9, "trial": 10}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "nbsphinx": 4, "sphinx": 57}, "alltitles": {"PurpleCaffeine API References": [[0, "module-purplecaffeine"]], "Guide: Tracking quantum experiments": [[1, "Guide:-Tracking-quantum-experiments"]], "Guide: widget": [[2, "Guide:-widget"]], "Guide: Tracking QUBO experiments": [[3, "Guide:-Tracking-QUBO-experiments"]], "QAOA": [[3, "QAOA"]], "VQE": [[3, "VQE"]], "Guide: Setting up the API server": [[4, "Guide:-Setting-up-the-API-server"]], "Quickstart": [[4, "Quickstart"]], "Automatically": [[4, "Automatically"]], "Manually": [[4, "Manually"]], "Documentation": [[4, "Documentation"]], "Get a token": [[4, "Get-a-token"]], "Get experiment": [[4, "Get-experiment"]], "Get all experiments": [[4, "Get-all-experiments"]], "Post experiment": [[4, "Post-experiment"]], "Update experiment": [[4, "Update-experiment"]], "Delete experiment": [[4, "Delete-experiment"]], "PurpleCaffeine": [[6, "purplecaffeine"]], "Guides": [[6, null]], "API references": [[6, null]], "purplecaffeine.ApiStorage": [[7, "purplecaffeine-apistorage"]], "purplecaffeine.BaseStorage": [[8, "purplecaffeine-basestorage"]], "purplecaffeine.LocalStorage": [[9, "purplecaffeine-localstorage"]], "purplecaffeine.Trial": [[10, "purplecaffeine-trial"]]}, "indexentries": {"module": [[0, "module-purplecaffeine"]], "purplecaffeine": [[0, "module-purplecaffeine"]], "apistorage (class in purplecaffeine)": [[7, "purplecaffeine.ApiStorage"]], "__init__() (apistorage method)": [[7, "purplecaffeine.ApiStorage.__init__"]], "basestorage (class in purplecaffeine)": [[8, "purplecaffeine.BaseStorage"]], "__init__() (basestorage method)": [[8, "purplecaffeine.BaseStorage.__init__"]], "localstorage (class in purplecaffeine)": [[9, "purplecaffeine.LocalStorage"]], "__init__() (localstorage method)": [[9, "purplecaffeine.LocalStorage.__init__"]], "trial (class in purplecaffeine)": [[10, "purplecaffeine.Trial"]], "__init__() (trial method)": [[10, "purplecaffeine.Trial.__init__"]], "arrays (trial attribute)": [[10, "purplecaffeine.Trial.arrays"]], "artifacts (trial attribute)": [[10, "purplecaffeine.Trial.artifacts"]], "circuits (trial attribute)": [[10, "purplecaffeine.Trial.circuits"]], "description (trial attribute)": [[10, "purplecaffeine.Trial.description"]], "metrics (trial attribute)": [[10, "purplecaffeine.Trial.metrics"]], "operators (trial attribute)": [[10, "purplecaffeine.Trial.operators"]], "parameters (trial attribute)": [[10, "purplecaffeine.Trial.parameters"]], "tags (trial attribute)": [[10, "purplecaffeine.Trial.tags"]], "texts (trial attribute)": [[10, "purplecaffeine.Trial.texts"]]}})