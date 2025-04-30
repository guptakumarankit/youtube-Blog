# 🔐 What is a Signature in a JWT?
- A signature is like a lock that ensures no one can change the information in a JWT (the token) once it’s created. It seals the token so you know it hasn’t been tampered with.


# 🧠 Think of it like this:
- You send a message to your friend.
- You write the message, and then you seal it with a lock that only you and your friend know how to open.
- Your friend can read the message and see the lock. If the lock hasn’t been broken, they know the message hasn’t been changed.

# 🔑 How does the signature work in a JWT?
- When a server gives you a token (after you log in), the signature is like a special stamp or seal that:
- Makes sure no one can change the token (like adding or removing information).
- Proves that it came from the server and wasn’t altered.