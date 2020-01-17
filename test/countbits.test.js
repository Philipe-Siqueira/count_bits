const countBits = require('../countbits')
const values = [
  {'input':1234, 'output':5 },
  {'input':4, 'output':1 },
  {'input':7, 'output':3 }
];
describe('Transform input in bit and count bits 1', ()=>{
  for(index in values){
    let input = values[index].input;
    let output = values[index].output
    it(`Teste ${index} Input: ${input} expected Output: ${output}`, ()=> {
      expect(countBits(input)).toBe(output);
    })
  }
})