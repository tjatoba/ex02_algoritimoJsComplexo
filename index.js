const imcCalculator = (weight, hight) => {
  if (weight <= 0 || hight <= 0) {
    return "Valores inválidos. Peso e altura não podem ser negativos e devem ser maiores que zero.";
  } else {
    const imc = weight / (hight * hight);
    return imc.toFixed(2);
  }
};

const weight = parseFloat(prompt("Insira seu peso: "));
const hight = parseFloat(prompt("Insira seu peso: "));

const imcResult = imcCalculator(weight, hight);
alert(`O IMC é: ${imcResult}`);

const multipleNumber = (num, divider) => {
  if (num >= 0 && divider >= 0 && num % divider === 0) {
    return `${num} é divisivel por ${divider}`;
  } else if (num >= 0 && divider && num % divider !== 0) {
    return `${num} não é divisor de ${divider}`;
  } else {
    return "Insira valores válidos";
  }
};

const num = parseInt(prompt("Insira um número"));
const divider = parseInt(prompt("Insiraa outro numero"));

const multipleResult = multipleNumber(num, divider);
alert(multipleResult);

const icms = (productValue, taxValue) => {
  if (productValue < 0 || taxValue < 0) {
    return "Valores inválidos. Verifique os parâmetros.";
  }

  const icms = productValue * (taxValue / 100);

  return icms.toFixed(2);
};

const productValue = parseFloat(prompt("Digite o valor da mercadoria: "));
const taxValue = parseFloat(prompt("Digite o valor do imposto: "));

const resultadoICMS = icms(productValue, taxValue);
alert("O valor do ICMS é: R$ " + resultadoICMS);
