export class TradeModel{
    id:number
    user_id: number;
    user_name: string;
    curent_name: string;
    status_order: string; //on trading or on traded
    direction: string; // short long
    time_order: string;
    open_order: string;
    close_order: string;
    balance_order: string;
    balance_start: string;
    balance_end: string;//$200
    profit_lose: string; //$100
    referent: string // auto win lose
    total_balance: string
    commision_order: string
    winlose:string
    isWinActive:string;
    isDefindAdmin:string
    page: number;
    limit: number;
    createAt:Date;
    updateAt:Date;

}