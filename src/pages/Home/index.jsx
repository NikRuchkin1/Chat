import React from 'react';
import { Message } from 'components';

import './Home.scss';

function Home() {
  return (
    <section>
      <Message
        date="Fri Nov 13 2020 22:25:53"
        text="Привет"
        avatar="https://sun1-29.userapi.com/impf/c851236/v851236624/1042ea/8WukqITT6jA.jpg?size=50x0&quality=88&crop=0,0,1000,1000&sign=d69f5386a0dc7f7e472cf46259eac9c1&ava=1"
      />
      <Message
        date="Fri Nov 13 2020 22:25:53"
        text="Привет"
        avatar="https://sun1-29.userapi.com/impf/c851236/v851236624/1042ea/8WukqITT6jA.jpg?size=50x0&quality=88&crop=0,0,1000,1000&sign=d69f5386a0dc7f7e472cf46259eac9c1&ava=1"
      />
      <Message
        date="Fri Nov 13 2020 22:25:53"
        text="Привет"
        avatar="https://sun1-29.userapi.com/impf/c851236/v851236624/1042ea/8WukqITT6jA.jpg?size=50x0&quality=88&crop=0,0,1000,1000&sign=d69f5386a0dc7f7e472cf46259eac9c1&ava=1"
      />
      <Message
        date="Fri Nov 13 2020 22:25:53"
        text="Салам, Брут! Чё, как, уничтожил флот галлов?"
        avatar="https://sun1-22.userapi.com/impf/c855336/v855336733/16a95b/CzbM7JvtHec.jpg?size=50x0&quality=88&crop=1,286,956,956&sign=ea71e5b4a4383c9490ff430f4f022c2a&ava=1"
        isMe={true}
        isReaded={false}
        attachments={[
          {
            filename: 'image.jpg',
            url:
              'https://sun1-22.userapi.com/impf/c855336/v855336733/16a95b/CzbM7JvtHec.jpg?size=50x0&quality=88&crop=1,286,956,956&sign=ea71e5b4a4383c9490ff430f4f022c2a&ava=1',
          },
          {
            filename: 'image.jpg',
            url:
              'https://sun1-22.userapi.com/impf/c855336/v855336733/16a95b/CzbM7JvtHec.jpg?size=50x0&quality=88&crop=1,286,956,956&sign=ea71e5b4a4383c9490ff430f4f022c2a&ava=1',
          },
        ]}
      />
    </section>
  );
}
export default Home;
