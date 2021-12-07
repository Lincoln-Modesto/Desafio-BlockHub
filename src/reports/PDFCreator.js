import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export default function PDFCreator(filteredHours, totalHours, project) {

  const data = filteredHours.map((item) => {

    let dia = item?.day.split("-")[2];
    let mes = item?.day.split("-")[1];
    let ano = item?.day.split("-")[0];

    const date = dia + '/' + mes + '/' + ano

    return [
      {text: item.user, fontSize: 10},
      {text: date, fontSize: 10},
      {text: item.hours, fontSize: 10}
    ]
  });

  pdfMake.vfs = pdfFonts.pdfMake.vfs

  const title = [{
    text: `Relatório de datas e horas do projeto: ${project?.name}`,
    fontSize: 18,
    bold: true,
    margin: [25, 25, 5, 15],
    alignment: 'left',
  },
  {
    text: `O total de horas trabalhadas no projeto foi de ${totalHours} horas`,
    fontSize: 16,
    bold: true,
    margin: [25, 10, 5, 15],
    alignment: 'left',
  }
  ];

  const content = [
    {
      text: `Relatório de datas e horas do projeto: ${project?.name}`,
      fontSize: 18,
      bold: true,
      margin: [0, 25, 0, 15],
      alignment: 'left',
    },
    {
      text: `O total de horas trabalhadas no projeto foi de: ${totalHours} horas`,
      fontSize: 14,
      margin: [0, 0, 25, 15],
      alignment: 'left',
    },
    {
      table: {
        margin: [25, 10, 5, 15],
        headerRows: 1,
        widths: ['*', '*', '*'],
        body: [
          [
            { text: 'Usuário', fontSize: 12, bold: true, alignment: 'center'},
            { text: 'Data', fontSize: 12, bold: true, alignment: 'center'},
            { text: 'Horas trabalhadas', fontSize: 12, bold: true, alignment: 'center',}
          ],
          ...data
				]
      }
    }
  ];

  const footer = [
   
  ];

  const docDefinitions = {
    pageSize: 'A4',

    header: [title],
    content: [content],
    footer: [footer]
  }

  pdfMake.createPdf(docDefinitions).download('Lançamento de Horas.pdf')
}