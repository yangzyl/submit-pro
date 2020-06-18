const CODE = { 
    CMCC: { 
    LEN3: [ 
    '135', '136', '137', '138', '139', '147', '150', '151', '152', 
    '157', '158', '159', '172', '178', '182', '183', '184', '187', 
    '188', '198' 
    ], 
    LEN4: [ 
    '134[0-8]', '1703', '1705', '1706' 
    ] 
    }, 
    CUCC: { 
    LEN3: [ 
    '130', '131', '132', '145', '155', '156', '166', '171', '175', 
    '176', '185', '186', '166' 
    ], 
    LEN4: ['1704', '1707', '1708', '1709'] 
    }, 
    CTCC: { 
    LEN3: [ 
    '133', '149', '153', '173', '177', '180', '181', '189', '199' 
    ], 
    LEN4: ['1700', '1701', '1702'] 
    }, 
    SP: '1349' 
    }; 
      const PRE4_REG_STRING = [] 
    .concat(CODE.CMCC.LEN3, CODE.CUCC.LEN3, CODE.CTCC.LEN3) 
    .map(prefix => `${prefix}[0-9]`) 
    .concat(CODE.CMCC.LEN4, CODE.CUCC.LEN4, CODE.CTCC.LEN4, CODE.SP) 
    .join('|'); 
      const PHONE_NUMBER_REG = new RegExp(`^(${PRE4_REG_STRING})[0-9]{7}$`); 
export default PHONE_NUMBER_REG;