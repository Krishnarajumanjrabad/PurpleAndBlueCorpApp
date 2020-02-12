export class MartialStatus{
    martialStatus: string;
    other: string;

    setMartialStatus(status: MartialStatus){
        this.martialStatus = status.martialStatus;
        this.other = status.other;
    }
}