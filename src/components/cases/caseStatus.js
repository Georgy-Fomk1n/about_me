import { CircleCheck, Clock, Send } from 'lucide-react';

// status → icon, default label, title of the closing scene
const caseStatus = {
  sent: { icon: Send, label: 'Обращение направлено', sceneTitle: 'Что дальше' },
  progress: { icon: Clock, label: 'В работе', sceneTitle: 'Где всё сейчас' },
  answered: { icon: CircleCheck, label: 'Ответ получен', sceneTitle: 'Чем закончилось' },
  done: { icon: CircleCheck, label: 'Вопрос решён', sceneTitle: 'Чем закончилось' },
  completed: { icon: CircleCheck, label: 'Завершено', sceneTitle: 'Чем закончилось' }
};

export default caseStatus;
