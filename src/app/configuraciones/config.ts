export var CONFIG = {
  publicKey: '-----BEGIN PUBLIC KEY-----\n' +
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxrTu3EbeKcxwTS8CYUg4i0POQ\n' +
  'YER7xRlF3AKUcEU4oYQw8EcW8AB45xWCGAsq/LM0dal3M/jSavCR76V/N/pgq4tc\n' +
  'hVobxDcTIVNvXChjP3Il8Fa16wJOqnKNo7V20FwXKcFtahSJyWML1fOoKEMIPB+e\n' +
  '+Ab0SoTK6uR1H7OEIwIDAQAB\n' +
  '-----END PUBLIC KEY-----',
  jwtValidatorParametros: {
    // 'RS512', 'PS256', 'PS512'
    alg: ['RS256'],
    // iss: ['http://foo.com'],
    // sub: ['1234567890'],
    // verifyAt: KJUR.jws.IntDate.get('20150520235959Z'),
    // aud: ['http://foo.com'], // aud: 'http://foo.com' is fine too.
    // jti: 'id123456',
    // gracePeriod: 1 * 60 * 60 // accept 1 hour slow or fast
  },
  PasoPorInicio: false
};
