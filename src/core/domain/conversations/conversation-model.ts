import { Ticket } from '../tickets/ticket-model'
import { ConversationMessage } from '@core/domain/conversations/conversations/converstion-messages/conversation-message-model'
import { User } from '../users/user-model'

export class Conversation {
  public protocolo_atendimento: number
  public data_abertura: string
  public protocolo_chamado: number
  public id_usuario: number
  public chamado: Ticket
  public atendente: User
  public mensagens: ConversationMessage[]
}
