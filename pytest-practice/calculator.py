def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError("0では割れません")
    return a / b
