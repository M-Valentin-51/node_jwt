## Generation des cles

Dans le dossier ./.cert/

Generation de la cle priver
`openssl genrsa -out private.pem 4096`

Generation de la cle public
`openssl rsa -in private.pem -pubout -out public.pem`
