interface SenderInfo {
    name: string;
}

interface MessageType {
    id: string;
    from: SenderInfo & any;
    type: string;
    time: string;
    text?: string;
}

const messagesList = [{
    id: 'chat-5-1090',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идёт работа над проектом?'
  }, {
    id: 'chat-5-1091',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:12',
    text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
  }, {
    id: 'chat-5-1092',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:14',
    text: 'Не уверена, что сегодня получится. Всё ещё в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
  }, {
    id: 'chat-5-1093',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:20',
    text: 'Нет, всё прошло гладко. Очень хочу показать всё команде.'
  }, {
    id: 'chat-5-1094',
    from: { name: 'Виктор' },
    type: 'typing',
    time: '10:31'
  }];

  const messages: MessageType[] = (messagesList as MessageType[]);

  export {messages};
  export type {MessageType, SenderInfo};