if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["fopp_2_clens8_7_2a"] = {"code": "origlist = [45,32,88]\naliaslist = origlist\noriglist += [\"cat\"]\noriglist = origlist + [\"cow\"]\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"origlist": ["REF", 1]}, "ordered_globals": ["origlist"], "stack_to_render": [], "heap": {"1": ["LIST", 45, 32, 88]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"origlist": ["REF", 1], "aliaslist": ["REF", 1]}, "ordered_globals": ["origlist", "aliaslist"], "stack_to_render": [], "heap": {"1": ["LIST", 45, 32, 88]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"origlist": ["REF", 1], "aliaslist": ["REF", 1]}, "ordered_globals": ["origlist", "aliaslist"], "stack_to_render": [], "heap": {"1": ["LIST", 45, 32, 88, "cat"]}, "stdout": ""}, {"line": 4, "event": "return", "func_name": "<module>", "globals": {"origlist": ["REF", 2], "aliaslist": ["REF", 1]}, "ordered_globals": ["origlist", "aliaslist"], "stack_to_render": [], "heap": {"2": ["LIST", 45, 32, 88, "cat", "cow"], "1": ["LIST", 45, 32, 88, "cat"]}, "stdout": ""}]}