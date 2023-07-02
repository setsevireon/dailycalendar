import jsPDF from "jspdf"

export function savePdf(data: string) {
  var obj = new jsPDF()
  obj.text(data, 20, 20)
  obj.save('calendar.pdf')
}
