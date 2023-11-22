export class musicals{

    private _nameTools: string;
  
    private _dataCrate: string;
  
    private _describeText: string;



    constructor(nameTools:string,dataCrate:string,describeText:string){
        this._nameTools=nameTools;
        this._dataCrate=dataCrate;
        this._describeText=describeText;
    }



    public get nameTools(): string {
        return this._nameTools;
    }
    public set nameTools(value: string) {
        this._nameTools = value;
    }
    public get dataCrate(): string {
        return this._dataCrate;
    }
    public set dataCrate(value: string) {
        this._dataCrate = value;
    }

    public get describeText(): string {
        return this._describeText;
    }
    public set describeText(value: string) {
        this._describeText = value;
    }
}