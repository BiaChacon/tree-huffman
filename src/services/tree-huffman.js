function Node(letra, frequencia) {
  this.frequencia = frequencia;
  this.letra = letra;
  this.dir = null;
  this.esq = null;
}

function HuffmanTree() {
  let root = null;

  let leafs = [];

  let numbers = [];
  let table = [];

  let exit = "";

  this.getFrequency = function (palavra) {
    let freq = [];

    for (var i = 0; i < palavra.length; i++) {
      if (freq[palavra.charAt(i)] == undefined) {
        freq[palavra.charAt(i)] = 1;
      } else {
        freq[palavra.charAt(i)]++;
      }
    }

    //console.log(freq);

    var j = 0;
    for (var i in freq) {
      leafs[j] = new Node(i, freq[i]);
      j++;
    }

    //console.log(leafs);
  };

  this.createTree = function () {
    while (leafs.length > 1) {
      var menorB = this.pickshortest();
      var menorA = this.pickshortest();

      var novoNo = new Node(undefined, menorA.frequencia + menorB.frequencia);
      novoNo.esq = menorA;
      novoNo.dir = menorB;

      leafs.push(novoNo);
    }

    root = leafs[0];
  };

  this.pickshortest = function () {
    var menor = 0;

    for (var i = 1; i < leafs.length; i++) {
      if (leafs[menor].frequencia > leafs[i].frequencia) {
        menor = i;
      }
    }

    var shortest = leafs[menor];
    leafs.splice(menor, 1);
    return shortest;
  };

  this.preOrder = function () {
    this.preOrderNode(root);
  };

  this.preOrderNode = function (node) {
    if (node !== null) {
      console.log(node.letra + "|" + node.frequencia);
      this.preOrderNode(node.esq);
      this.preOrderNode(node.dir);
    }
  };

  this.writeToFile = function (text) {
    exit = "";
    this.writeToFileNode(root, text);
    text = this.encode(text);
    return [text, exit];
  };

  this.writeToFileNode = function (node, file) {
    if (node == null) {
      exit = exit + "#;";
    } else {
      exit =
        exit +
        ((node.letra === undefined ? "*|" : node.letra + "|") +
          node.frequencia +
          ";");
      this.writeToFileNode(node.esq, file);
      this.writeToFileNode(node.dir, file);
    }
  };

  this.loadFromFile = function (text) {
    numbers = text.split(";");
    numbers.pop();
    root = this.loadPreOrder(null);
  };

  this.loadPreOrder = function (node) {
    if (numbers[0] === "#" || numbers[0] === "") {
      numbers.splice(0, 1);
      return null;
    } else {
      var separado = numbers[0].split("|");
      var l = separado[0] === "*" ? undefined : separado[0];
      var f = parseInt(separado[1]);
      var node = new Node(l, f);
      numbers.splice(0, 1);
      node.esq = this.loadPreOrder(node.esq);
      node.dir = this.loadPreOrder(node.dir);
    }

    return node;
  };

  this.createTable = function () {
    this.fillTable(root, "");
    //console.log(table);
  };

  this.fillTable = function (node, code) {
    if (node.letra != undefined) {
      table[node.letra] = code;
    } else {
      this.fillTable(node.esq, code + "0");
      this.fillTable(node.dir, code + "1");
    }
  };

  this.encode = function (palavra) {
    var saida = "";

    for (var i = 0; i < palavra.length; i++) {
      saida += table[palavra.charAt(i)];
    }

    //console.log(saida);
    return saida;
  };

  this.decode = function (palavra) {
    let saida = "";
    let current = root;

    for (var i = 0; i < palavra.length; i++) {
      if (palavra.charAt(i) == "0") {
        current = current.esq;
      } else if (palavra.charAt(i) == "1") {
        current = current.dir;
      }

      if (current.esq == null && current.dir == null) {
        saida += current.letra;
        current = root;
      }
    }
    return saida;
  };
}

function ZapZum() {
  let h = new HuffmanTree();

  this.zip = function (text) {
    h.getFrequency(text);
    h.createTree();
    h.createTable();
    var saida = h.writeToFile(text);
    return saida;
  };

  this.unzip = function (text) {
    h.loadFromFile(text);

    var data = text.split(";");
    var palavra = data.pop();

    var saida = h.decode(palavra);
    return saida;
  };
}

const treeHuffman = new ZapZum();

export default treeHuffman;
