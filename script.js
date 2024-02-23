window.jsPDF = window.jspdf.jsPDF;



 


document.getElementById('gerarPDF').addEventListener('click', function() {
    const doc = new jsPDF('l', 'mm', [375, 255]);
    const img = new Image()
    img.src = '3x4.png';

    const xt = 10; // Coordenada x
    const yt = 22; // Coordenada y
    const width = 330; // Largura da caixa
    const height = 50; // Altura da caixa

// Desenha a caixa no documento PDF
    doc.rect(xt, yt, width, height);

    doc.addImage(img, 'PNG', 10, 22, 40, 50);



    const coordenadaX = 10;
    const coordenadaY = 90;
    const larguraTabela = 330;
    const alturaTabela = 80;

    // Definir as dimensões e a posição da caixa
    const xtitulo = 50;
    const ytitulo = 22;
    const larguratitulo = 290;
    const alturatitulo = 8;

    // Definir a cor da caixa
    doc.setFillColor(231,230,230); // Cor vermelha

    // Desenhar a caixa
    doc.rect(xtitulo, ytitulo, larguratitulo, alturatitulo, 'F'); // 'F' significa preencher com a cor definida

    // Definir a cor do texto
    doc.setTextColor(0, 0, 0); // Cor branca

    // Definir a fonte e o tamanho do texto
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    
 

    // Calcular a posição do texto para centralizá-lo na caixa
    const textoX = 170
    const textoY = 28

    // Adicionar o texto à página
    doc.text("DADOS DO CLIENTE", textoX, textoY);
     // Define os dados da tabela


    
    // itens dentro da dados do cliente


    //nao mexe aq n disgraca
    doc.setTextColor(0,0,0); 
    doc.setFontSize(15);
    doc.text("Nome :", 54, 40,)
    doc.setFontSize(15);
    doc.text("CPF :", 54, 48,)
    doc.setFontSize(15);
    doc.text("Apelido :", 54, 55,)
    doc.setFontSize(15);
    doc.text("Telefone :", 54, 63,)

    // colocar os inputs
    doc.setFont('helvetica', '');
    doc.setTextColor(82,86,89); 
    doc.setFontSize(13);
    doc.text("Input", 75, 40,)
    doc.setFontSize(13);
    doc.text("Input", 70, 48,)
    doc.setFontSize(13);
    doc.text("Input", 79, 55,)
    doc.setFontSize(13);
    doc.text("Input", 80, 63,)


    //nao mexe aq n disgraca
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0,0,0); 
    doc.setFontSize(15);
    doc.text("Cidade/Estado :", 140, 40,)
    doc.setFontSize(15);
    doc.text("Endereço :", 140, 48,)
    doc.setFontSize(15);
    doc.text("Bairro :", 140, 55,)
    doc.setFontSize(15);
    doc.text("Número :", 140, 63,)


    // colocar os inputs
    doc.setFont('helvetica', '');
    doc.setTextColor(82,86,89); 
    doc.setFontSize(13);
    doc.text("Input", 182, 40,)
    doc.setFontSize(13);
    doc.text("Input", 169, 48,)
    doc.setFontSize(13);
    doc.text("Input", 160, 55,)
    doc.setFontSize(13);
    doc.text("Input", 164, 63,)



    //nao mexe aq n disgraca
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0,0,0); 
    doc.setFontSize(15);
    doc.text("Data Nasc.:", 250, 42,)
    doc.setFontSize(15);
    doc.text("RG :", 250, 52,)
    doc.setFontSize(15);
    doc.text("E-mail :", 250, 62,)


     // colocar os inputs
     doc.setFont('helvetica', '');
     doc.setTextColor(82,86,89); 
     doc.setFontSize(13);
     doc.text("Input", 280, 42,)
     doc.setFontSize(13);
     doc.text("Input", 262, 52,)
     doc.setFontSize(13);
     doc.text("Input", 270, 62,)





     const dados = [
        ['Data Compra', 'Compras', 'Pagamentos', 'Divida', 'Limite Usado', 'Limite Disponivel', 'Vencimento'],
        ['Dado 1', 'Dado 2', 'Dado 3', 'Dado 4', 'Dado 5', 'Dado 6', 'Dado 7'],
        ['Dado 1', 'Dado 2', 'Dado 3', 'Dado 4', 'Dado 5', 'Dado 6', 'Dado 7'],
        ['Dado 1', 'Dado 2', 'Dado 3', 'Dado 4', 'Dado 5', 'Dado 6', 'Dado 7'],
        ['Dado 1', 'Dado 2', 'Dado 3', 'Dado 4', 'Dado 5', 'Dado 6', 'Dado 7'],
        ['Dado 1', 'Dado 2', 'Dado 3', 'Dado 4', 'Dado 5', 'Dado 6', 'Dado 7'],
        ['Dado 1', 'Dado 2', 'Dado 3', 'Dado 4', 'Dado 5', 'Dado 6', 'Dado 7'],
        ['Dado 1', 'Dado 2', 'Dado 3', 'Dado 4', 'Dado 5', 'Dado 6', 'Dado 7']
    ];

    // Opções da tabela
    const options = {
        theme: 'grid',
        headStyles: {
            fillColor: [82, 86, 89],
            textColor: [255, 255, 255]
        }
    };

    // Cria a tabela usando o plugin autotable
    doc.autoTable({
        head: [dados[0]],
        body: dados.slice(1),
        startY: coordenadaY,
        margin: { top: coordenadaY, left: coordenadaX},
        tableWidth: larguraTabela,
        tableHeight: alturaTabela,
        ...options
    });



    const xlimitecred = 10;
    const ylimitecred = 160;
    const larguralimitecred = 130;
    const alturalimitecred = 8;

    doc.setFont('helvetica', 'bold');
    // Definir a cor da caixa
    doc.setFillColor(248,203,173); // Cor vermelha

    // Desenhar a caixa
    doc.rect(xlimitecred, ylimitecred, larguralimitecred, alturalimitecred, 'F'); // 'F' significa preencher com a cor definida
    doc.text("Limite de Crédito:",20,166);
    doc.text("R$ 9.999,99",60,166);


    const xnivel = 10;
    const ynivel = 170;
    const larguranivel = 130;
    const alturanivel = 8;

    doc.setFont('helvetica', 'bold');
    // Definir a cor da caixa
    doc.setFillColor(169,208,142); // Cor vermelha

    // Desenhar a caixa
    doc.rect(xnivel, ynivel, larguranivel, alturanivel, 'F'); // 'F' significa preencher com a cor definida
    doc.text("Nivel do Cliente:",20,176);
    doc.text("(bom)",60,176);



    const xdesconto = 190;
    const ydesconto = 160;
    const larguradesconto = 130;
    const alturadesconto = 8;

    doc.setFont('helvetica', 'bold');
    // Definir a cor da caixa
    doc.setFillColor(255,0,102); // Cor vermelha

    // Desenhar a caixa
    doc.rect(xdesconto, ydesconto, larguradesconto, alturadesconto, 'F'); // 'F' significa preencher com a cor definida
    doc.text("Desconto da Divida:",220,166);
    doc.text("R$ 9.999,99",270,166);


    const xvalores = 190;
    const yvalores = 170;
    const larguravalores = 130;
    const alturavalores = 8;

    doc.setFont('helvetica', 'bold');
    // Definir a cor da caixa
    doc.setFillColor(189,215,238); // Cor vermelha

    // Desenhar a caixa
    doc.rect(xvalores, yvalores, larguravalores, alturavalores, 'F'); // 'F' significa preencher com a cor definida
    doc.text("Valores da Compras",220,176);
    doc.text("R$ 9.999,99",270,176);


    const xtotal = 190;
    const ytotal = 190;
    const larguratotal = 130;
    const alturatotal = 10;

    doc.setFont('helvetica', 'bold');
    // Definir a cor da caixa
    doc.setFillColor(226,239,218); // Cor vermelha

    // Desenhar a caixa
    doc.rect(xtotal, ytotal, larguratotal, alturatotal, 'F'); // 'F' significa preencher com a cor definida
    doc.text("Total Geral",220,196);
    doc.text("R$ 9.999,99",270,196);

    doc.setFont('helvetica', 'italic');
    doc.text("Data de Cadastro :",10,190);
    doc.text("00/00/0000",52,190);

    doc.setFont('helvetica', 'bold');

    doc.text("Coribe - Ba, 03 de janeiro de 2024",140,220);

    doc.text("Assinatura do Cliente :",40,235);
    doc.text("_____________________________________________________________",110,235);
    doc.text("(Nome do Cliente)",115,242);





    // Salva o documento PDF
    doc.save('tabela.pdf');
});

  
   



    
