if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["fopp_2_ac8_12_4"] = {"code": "colors = [\"Red\", \"Orange\", \"Indigo\"]\n\nfor color in colors:\n    if color[0] in [\"A\", \"E\", \"I\", \"O\", \"U\"]:\n        colors.append(color)\n\n    print(colors)\n\n    if len(colors)>6:\n        break\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1]}, "ordered_globals": ["colors"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo"]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Red"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo"]}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Red"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo"]}, "stdout": ""}, {"line": 9, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Red"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n"}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Red"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Orange"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Orange"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n"}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Orange"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange"]}, "stdout": "['Red', 'Orange', 'Indigo']\n"}, {"line": 9, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Orange"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n"}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Orange"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Indigo"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Indigo"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n"}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Indigo"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n"}, {"line": 9, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Indigo"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n"}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Indigo"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Orange"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Orange"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n"}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Orange"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo", "Orange"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n"}, {"line": 9, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Orange"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo", "Orange"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo', 'Orange']\n"}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Orange"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo", "Orange"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo', 'Orange']\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Indigo"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo", "Orange"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo', 'Orange']\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Indigo"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo", "Orange"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo', 'Orange']\n"}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Indigo"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo', 'Orange']\n"}, {"line": 9, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Indigo"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo', 'Orange', 'Indigo']\n"}, {"line": 10, "event": "step_line", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Indigo"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo', 'Orange', 'Indigo']\n"}, {"line": 10, "event": "return", "func_name": "<module>", "globals": {"colors": ["REF", 1], "color": "Indigo"}, "ordered_globals": ["colors", "color"], "stack_to_render": [], "heap": {"1": ["LIST", "Red", "Orange", "Indigo", "Orange", "Indigo", "Orange", "Indigo"]}, "stdout": "['Red', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo', 'Orange']\n['Red', 'Orange', 'Indigo', 'Orange', 'Indigo', 'Orange', 'Indigo']\n"}]}