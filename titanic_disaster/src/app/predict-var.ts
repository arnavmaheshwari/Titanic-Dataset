export class PredictVar {
    public PassengerId:any;
    public Pclass:any;
    public Age:any;
    public SibSp:any;
    public Parch:any;
    public Ticket:any;
    public Fare:any;
    public C:any;
    public Q:any;
    public S:any;

    constructor(PassengerId:any,Pclass:any,Age:any,SibSp:any,Parch:any,Ticket:any,Fare:any,C:any,Q:any,S:any){
        this.PassengerId=PassengerId;
        this.Pclass=Pclass;
        this.Age=Age;
        this.SibSp=SibSp;
        this.Parch=Parch;
        this.Ticket=Ticket;
        this.Fare=Fare;
        this.C=C;
        this.Q=Q;
        this.S=S;
    }
}
