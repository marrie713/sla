export const sqlConfig = {
    server: '192.168.1.110',
    port: 1433,
    user: 'Sa',
    password: '01022007',
    database: 'Shopping_Bebedouro',
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 5000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
}