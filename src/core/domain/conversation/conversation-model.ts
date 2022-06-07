import { Ticket } from '@domain/ticket/ticket-model'
import { ConversationMessage } from './converstion-message/conversation-message-model'
import { User } from '@domain/user/user-model'

export class Conversation {
  public protocolo_atendimento: number
  public data_abertura: string
  public protocolo_chamado: number
  public id_usuario: number
  public chamado: Ticket
  public atendente: User
  public mensagens: ConversationMessage[]
}
