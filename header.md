# ✅ 1. JWT Header (First Part)
- The header is a small JSON object that tells:
- What kind of token it is
- What algorithm was used to sign it

# Example 
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- alg: algorithm used to sign the token (e.g., HS256)
- typ: type of the token — always JWT