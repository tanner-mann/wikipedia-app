export class card {
  title: string;
  imgPath: string;
  imgCaption: string;
  text: string;

  constructor({ title, imgPath, imgCaption, text }:
    { title: string, imgPath: string, imgCaption: string, text: string}) {
    this.title = title;
    this.imgPath = imgPath;
    this.imgCaption = imgCaption;
    this.text = text;
  }
}
