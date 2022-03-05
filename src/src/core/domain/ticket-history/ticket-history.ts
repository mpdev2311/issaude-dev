import { ConversationHistoryAction } from "./ticket-history-action/ticket-history-action";

export class TicketHistory {
    public id : number
    public id_acao : number
    public protocolo_chamado : number
    public id_usuario : number
    public data_historico : string
    public acao : ConversationHistoryAction
}