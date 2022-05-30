export class ConversationMessage {
    public id : number
    public id_usuario : number
    public cod_atendimento : number
    public id_menssagem_resposta : number
    public mensagem : string
    public data_mensagem : string
    public is_open : boolean = false
    public respostas :ConversationMessage[]  = []
}