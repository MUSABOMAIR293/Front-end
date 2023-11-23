export class musicals{
    private _mu_id: number;
   
    private _nameTools: string;
  
    private _dataCrate: string;
  
    private _describeText: string;



    constructor(
        mu_id: number,
        nameTools:string,
        dataCrate:string,
        describeText:string
        ){
            this._mu_id=mu_id;
            this._nameTools=nameTools;
            this._dataCrate=dataCrate;
            this._describeText=describeText;
        }


 public get mu_id(): number {
        return this._mu_id;
    }
    public set mu_id(value: number) {
        this._mu_id = value;
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