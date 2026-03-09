export const grade6Data = {
  grade: {
    id: 'grade6',
    name: 'Tiếng Anh Lớp 6 (Global Success)',
    order: 1
  },
  units: [
    {
      id: 'unit1',
      title: 'Unit 1: My New School',
      order: 1,
      description: 'Từ vựng về trường học, đồ dùng học tập. Ngữ pháp: Hiện tại đơn, Hiện tại tiếp diễn.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - School things',
          order: 1,
          objectives: ['Từ vựng về đồ dùng học tập', 'Các môn học'],
          type: 'vocabulary',
          words: [
            { word: 'calculator', ipa: '/ˈkæl.kjə.leɪ.tər/', pos: 'n', meaning_vi: 'máy tính cầm tay', example_en: 'I need a calculator for my math class.', example_vi: 'Tôi cần một chiếc máy tính cho lớp toán.' },
            { word: 'compass', ipa: '/ˈkʌm.pəs/', pos: 'n', meaning_vi: 'com-pa', example_en: 'Use a compass to draw a circle.', example_vi: 'Sử dụng com-pa để vẽ một hình tròn.' },
            { word: 'equipment', ipa: '/ɪˈkwɪp.mənt/', pos: 'n', meaning_vi: 'thiết bị', example_en: 'The school has new sports equipment.', example_vi: 'Trường học có thiết bị thể thao mới.' },
            { word: 'rubber', ipa: '/ˈrʌb.ər/', pos: 'n', meaning_vi: 'cục tẩy', example_en: 'Can I borrow your rubber?', example_vi: 'Tôi có thể mượn cục tẩy của bạn không?' },
            { word: 'pencil sharpener', ipa: '/ˈpen.səl ˈʃɑː.pən.ər/', pos: 'n', meaning_vi: 'gọt bút chì', example_en: 'Where is my pencil sharpener?', example_vi: 'Cái gọt bút chì của tôi ở đâu?' },
            { word: 'schoolbag', ipa: '/ˈskuːl.bæɡ/', pos: 'n', meaning_vi: 'cặp sách', example_en: 'My schoolbag is heavy.', example_vi: 'Cặp sách của tôi rất nặng.' },
            { word: 'uniform', ipa: '/ˈjuː.nɪ.fɔːm/', pos: 'n', meaning_vi: 'đồng phục', example_en: 'We wear uniform to school.', example_vi: 'Chúng tôi mặc đồng phục đến trường.' },
            { word: 'subject', ipa: '/ˈsʌb.dʒekt/', pos: 'n', meaning_vi: 'môn học', example_en: 'What is your favorite subject?', example_vi: 'Môn học yêu thích của bạn là gì?' },
            { word: 'history', ipa: '/ˈhɪs.tər.i/', pos: 'n', meaning_vi: 'lịch sử', example_en: 'I like history.', example_vi: 'Tôi thích môn lịch sử.' },
            { word: 'science', ipa: '/ˈsaɪ.əns/', pos: 'n', meaning_vi: 'khoa học', example_en: 'Science is interesting.', example_vi: 'Khoa học rất thú vị.' },
            { word: 'physics', ipa: '/ˈfɪz.ɪks/', pos: 'n', meaning_vi: 'vật lý', example_en: 'Physics is a difficult subject.', example_vi: 'Vật lý là một môn học khó.' },
            { word: 'exercise', ipa: '/ˈek.sə.saɪz/', pos: 'n', meaning_vi: 'bài tập', example_en: 'Do your homework exercise.', example_vi: 'Hãy làm bài tập về nhà của bạn.' },
            { word: 'lesson', ipa: '/ˈles.ən/', pos: 'n', meaning_vi: 'bài học', example_en: 'The lesson starts at 8 AM.', example_vi: 'Bài học bắt đầu lúc 8 giờ sáng.' },
            { word: 'homework', ipa: '/ˈhəʊm.wɜːk/', pos: 'n', meaning_vi: 'bài tập về nhà', example_en: 'I have a lot of homework today.', example_vi: 'Hôm nay tôi có rất nhiều bài tập về nhà.' },
            { word: 'classmate', ipa: '/ˈklɑːs.meɪt/', pos: 'n', meaning_vi: 'bạn cùng lớp', example_en: 'He is my classmate.', example_vi: 'Cậu ấy là bạn cùng lớp của tôi.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Present Simple & Present Continuous',
          order: 2,
          objectives: ['Thì hiện tại đơn', 'Thì hiện tại tiếp diễn'],
          type: 'grammar',
          grammar: {
            title: 'Present Simple vs Present Continuous',
            content: `
### 1. Thì hiện tại đơn (Present Simple)
- **Cách dùng:** Diễn tả thói quen, sự thật hiển nhiên, lịch trình.
- **Cấu trúc:** 
  - Khẳng định: S + V(s/es)
  - Phủ định: S + do/does + not + V
  - Nghi vấn: Do/Does + S + V?
- **Dấu hiệu:** always, usually, often, sometimes, never, every day...
- **Ví dụ:** I **go** to school every day. She **likes** apples.

### 2. Thì hiện tại tiếp diễn (Present Continuous)
- **Cách dùng:** Diễn tả hành động đang xảy ra tại thời điểm nói.
- **Cấu trúc:**
  - Khẳng định: S + am/is/are + V-ing
  - Phủ định: S + am/is/are + not + V-ing
  - Nghi vấn: Am/Is/Are + S + V-ing?
- **Dấu hiệu:** now, at the moment, at present, look!, listen!...
- **Ví dụ:** I **am studying** English now. Look! The bus **is coming**.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - My New School',
          order: 3,
          objectives: ['Đọc hiểu về trường học', 'Trả lời câu hỏi'],
          type: 'reading',
          reading: {
            title: 'My New School',
            passage: 'Hi, I am Phong. I am a student at Duy Tan Lower Secondary School. It is a new school in my town. The school is big and beautiful. It has three floors and forty classrooms. There is a large playground and a modern library. I love my new school very much. Every day, I go to school by bike. My favorite subject is English because it is interesting and I can talk to my foreign friends.',
            questions: [
              { question: 'What is the name of Phong\'s school?', options: ['Duy Tan Lower Secondary School', 'Le Loi Lower Secondary School', 'Nguyen Du Lower Secondary School'], answer: 'Duy Tan Lower Secondary School' },
              { question: 'How many classrooms does the school have?', options: ['Thirty', 'Forty', 'Fifty'], answer: 'Forty' },
              { question: 'What does the school have?', options: ['A large playground and a modern library', 'A small playground and a modern library', 'A large playground and an old library'], answer: 'A large playground and a modern library' },
              { question: 'How does Phong go to school?', options: ['By bus', 'On foot', 'By bike'], answer: 'By bike' },
              { question: 'Why does Phong like English?', options: ['Because it is easy', 'Because it is interesting and he can talk to foreign friends', 'Because his teacher is nice'], answer: 'Because it is interesting and he can talk to foreign friends' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit2',
      title: 'Unit 2: My House',
      order: 2,
      description: 'Từ vựng về các phòng trong nhà, đồ đạc. Ngữ pháp: Sở hữu cách, Giới từ chỉ vị trí.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Rooms and Furniture',
          order: 1,
          objectives: ['Từ vựng về các phòng', 'Từ vựng về đồ đạc trong nhà'],
          type: 'vocabulary',
          words: [
            { word: 'living room', ipa: '/ˈlɪv.ɪŋ ˌruːm/', pos: 'n', meaning_vi: 'phòng khách', example_en: 'We watch TV in the living room.', example_vi: 'Chúng tôi xem TV trong phòng khách.' },
            { word: 'bedroom', ipa: '/ˈbed.ruːm/', pos: 'n', meaning_vi: 'phòng ngủ', example_en: 'My bedroom is small but cozy.', example_vi: 'Phòng ngủ của tôi nhỏ nhưng ấm cúng.' },
            { word: 'kitchen', ipa: '/ˈkɪtʃ.ən/', pos: 'n', meaning_vi: 'nhà bếp', example_en: 'My mother is cooking in the kitchen.', example_vi: 'Mẹ tôi đang nấu ăn trong bếp.' },
            { word: 'bathroom', ipa: '/ˈbɑːθ.ruːm/', pos: 'n', meaning_vi: 'phòng tắm', example_en: 'I am taking a shower in the bathroom.', example_vi: 'Tôi đang tắm trong phòng tắm.' },
            { word: 'hall', ipa: '/hɔːl/', pos: 'n', meaning_vi: 'hành lang, sảnh', example_en: 'Leave your shoes in the hall.', example_vi: 'Hãy để giày của bạn ở hành lang.' },
            { word: 'attic', ipa: '/ˈæt.ɪk/', pos: 'n', meaning_vi: 'gác mái', example_en: 'We store old things in the attic.', example_vi: 'Chúng tôi cất đồ cũ trên gác mái.' },
            { word: 'cupboard', ipa: '/ˈkʌb.əd/', pos: 'n', meaning_vi: 'tủ chén', example_en: 'The cups are in the cupboard.', example_vi: 'Những chiếc cốc ở trong tủ chén.' },
            { word: 'wardrobe', ipa: '/ˈwɔː.drəʊb/', pos: 'n', meaning_vi: 'tủ quần áo', example_en: 'Hang your shirt in the wardrobe.', example_vi: 'Hãy treo áo sơ mi của bạn vào tủ quần áo.' },
            { word: 'dishwasher', ipa: '/ˈdɪʃˌwɒʃ.ər/', pos: 'n', meaning_vi: 'máy rửa bát', example_en: 'Put the dirty plates in the dishwasher.', example_vi: 'Hãy cho những chiếc đĩa bẩn vào máy rửa bát.' },
            { word: 'fridge', ipa: '/frɪdʒ/', pos: 'n', meaning_vi: 'tủ lạnh', example_en: 'There is some milk in the fridge.', example_vi: 'Có một ít sữa trong tủ lạnh.' },
            { word: 'chest of drawers', ipa: '/ˌtʃest əv ˈdrɔːz/', pos: 'n', meaning_vi: 'tủ có ngăn kéo', example_en: 'My socks are in the chest of drawers.', example_vi: 'Tất của tôi ở trong tủ ngăn kéo.' },
            { word: 'sink', ipa: '/sɪŋk/', pos: 'n', meaning_vi: 'bồn rửa', example_en: 'Wash your hands in the sink.', example_vi: 'Hãy rửa tay ở bồn rửa.' },
            { word: 'microwave', ipa: '/ˈmaɪ.krə.weɪv/', pos: 'n', meaning_vi: 'lò vi sóng', example_en: 'Heat the soup in the microwave.', example_vi: 'Hãy hâm nóng súp trong lò vi sóng.' },
            { word: 'apartment', ipa: '/əˈpɑːt.mənt/', pos: 'n', meaning_vi: 'căn hộ', example_en: 'They live in an apartment in the city.', example_vi: 'Họ sống trong một căn hộ ở thành phố.' },
            { word: 'stilt house', ipa: '/stɪlt haʊs/', pos: 'n', meaning_vi: 'nhà sàn', example_en: 'Many ethnic minorities live in stilt houses.', example_vi: 'Nhiều dân tộc thiểu số sống trong nhà sàn.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Possessive Case & Prepositions of Place',
          order: 2,
          objectives: ['Sở hữu cách', 'Giới từ chỉ vị trí'],
          type: 'grammar',
          grammar: {
            title: 'Possessive Case & Prepositions of Place',
            content: `
### 1. Sở hữu cách (Possessive Case)
- **Cách dùng:** Dùng để chỉ sự sở hữu của người hoặc vật.
- **Cấu trúc:** 
  - Thêm **'s** sau danh từ số ít hoặc danh từ số nhiều không kết thúc bằng "s". (Ví dụ: Nam's book, the children's toys)
  - Thêm dấu phẩy **'** sau danh từ số nhiều kết thúc bằng "s". (Ví dụ: the students' books)
- **Lưu ý:** Không dùng sở hữu cách với đồ vật, dùng "of" thay thế. (Ví dụ: the leg of the table)

### 2. Giới từ chỉ vị trí (Prepositions of Place)
- **in:** ở trong (in the box)
- **on:** ở trên bề mặt (on the table)
- **under:** ở dưới (under the bed)
- **next to:** ở bên cạnh (next to the chair)
- **behind:** ở phía sau (behind the door)
- **in front of:** ở phía trước (in front of the TV)
- **between:** ở giữa hai vật (between the lamp and the sofa)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - A Room at the Crazy House Hotel',
          order: 3,
          objectives: ['Đọc hiểu về một căn phòng đặc biệt', 'Tìm thông tin chi tiết'],
          type: 'reading',
          reading: {
            title: 'A Room at the Crazy House Hotel',
            passage: 'Welcome to the Crazy House Hotel in Da Lat. This is the Tiger Room. It is a very special room. There is a big tiger on the wall. The tiger is between the bathroom door and the window. The bed is under the window. There is a lamp on a small table next to the bed. There is a wardrobe in the corner of the room. The room does not have a TV, but it is very quiet and comfortable.',
            questions: [
              { question: 'Where is the Crazy House Hotel?', options: ['In Ha Noi', 'In Da Lat', 'In Ho Chi Minh City'], answer: 'In Da Lat' },
              { question: 'What is on the wall of the Tiger Room?', options: ['A picture', 'A big tiger', 'A clock'], answer: 'A big tiger' },
              { question: 'Where is the bed?', options: ['Under the window', 'Next to the door', 'In the middle of the room'], answer: 'Under the window' },
              { question: 'What is next to the bed?', options: ['A wardrobe', 'A small table with a lamp', 'A TV'], answer: 'A small table with a lamp' },
              { question: 'Does the room have a TV?', options: ['Yes, it does', 'No, it does not', 'Not mentioned'], answer: 'No, it does not' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit3',
      title: 'Unit 3: My Friends',
      order: 3,
      description: 'Từ vựng về các bộ phận cơ thể, tính cách. Ngữ pháp: Hiện tại tiếp diễn chỉ tương lai.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Body parts and Personality',
          order: 1,
          objectives: ['Từ vựng về các bộ phận cơ thể', 'Từ vựng miêu tả tính cách'],
          type: 'vocabulary',
          words: [
            { word: 'arm', ipa: '/ɑːm/', pos: 'n', meaning_vi: 'cánh tay', example_en: 'He has strong arms.', example_vi: 'Anh ấy có cánh tay khỏe mạnh.' },
            { word: 'ear', ipa: '/ɪər/', pos: 'n', meaning_vi: 'tai', example_en: 'Elephants have big ears.', example_vi: 'Voi có đôi tai lớn.' },
            { word: 'eye', ipa: '/aɪ/', pos: 'n', meaning_vi: 'mắt', example_en: 'She has blue eyes.', example_vi: 'Cô ấy có đôi mắt màu xanh.' },
            { word: 'leg', ipa: '/leɡ/', pos: 'n', meaning_vi: 'chân', example_en: 'My legs are tired.', example_vi: 'Chân tôi đang mỏi.' },
            { word: 'nose', ipa: '/nəʊz/', pos: 'n', meaning_vi: 'mũi', example_en: 'He has a straight nose.', example_vi: 'Anh ấy có một chiếc mũi thẳng.' },
            { word: 'finger', ipa: '/ˈfɪŋ.ɡər/', pos: 'n', meaning_vi: 'ngón tay', example_en: 'She is wearing a ring on her finger.', example_vi: 'Cô ấy đang đeo nhẫn trên ngón tay.' },
            { word: 'tall', ipa: '/tɔːl/', pos: 'adj', meaning_vi: 'cao', example_en: 'He is very tall.', example_vi: 'Anh ấy rất cao.' },
            { word: 'short', ipa: '/ʃɔːt/', pos: 'adj', meaning_vi: 'thấp, ngắn', example_en: 'She has short hair.', example_vi: 'Cô ấy có mái tóc ngắn.' },
            { word: 'chubby', ipa: '/ˈtʃʌb.i/', pos: 'adj', meaning_vi: 'mũm mĩm', example_en: 'The baby has chubby cheeks.', example_vi: 'Đứa bé có đôi má mũm mĩm.' },
            { word: 'blonde', ipa: '/blɒnd/', pos: 'adj', meaning_vi: 'vàng hoe (tóc)', example_en: 'She has blonde hair.', example_vi: 'Cô ấy có mái tóc vàng hoe.' },
            { word: 'active', ipa: '/ˈæk.tɪv/', pos: 'adj', meaning_vi: 'năng động', example_en: 'He is an active child.', example_vi: 'Cậu bé là một đứa trẻ năng động.' },
            { word: 'clever', ipa: '/ˈklev.ər/', pos: 'adj', meaning_vi: 'thông minh, khéo léo', example_en: 'She is a clever student.', example_vi: 'Cô ấy là một học sinh thông minh.' },
            { word: 'confident', ipa: '/ˈkɒn.fɪ.dənt/', pos: 'adj', meaning_vi: 'tự tin', example_en: 'He is confident in his abilities.', example_vi: 'Anh ấy tự tin vào khả năng của mình.' },
            { word: 'hard-working', ipa: '/ˌhɑːdˈwɜː.kɪŋ/', pos: 'adj', meaning_vi: 'chăm chỉ', example_en: 'She is a hard-working employee.', example_vi: 'Cô ấy là một nhân viên chăm chỉ.' },
            { word: 'funny', ipa: '/ˈfʌn.i/', pos: 'adj', meaning_vi: 'vui tính', example_en: 'He tells funny jokes.', example_vi: 'Anh ấy kể những câu chuyện cười vui nhộn.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Present Continuous for Future',
          order: 2,
          objectives: ['Sử dụng thì hiện tại tiếp diễn để diễn tả tương lai'],
          type: 'grammar',
          grammar: {
            title: 'Present Continuous for Future Arrangements',
            content: `
### Thì hiện tại tiếp diễn mang ý nghĩa tương lai
- **Cách dùng:** Chúng ta có thể sử dụng thì hiện tại tiếp diễn (Present Continuous) để nói về những kế hoạch, sự sắp xếp chắc chắn sẽ xảy ra trong tương lai gần. Thường có các trạng từ chỉ thời gian trong tương lai đi kèm.
- **Cấu trúc:** S + am/is/are + V-ing + (thời gian trong tương lai)
- **Ví dụ:**
  - I **am playing** football with my friends **this afternoon**. (Chiều nay tôi sẽ chơi bóng đá với bạn bè - đã có kế hoạch chắc chắn)
  - She **is visiting** her grandparents **tomorrow**. (Ngày mai cô ấy sẽ đi thăm ông bà)
  - We **are having** a party **next weekend**. (Cuối tuần tới chúng tôi sẽ tổ chức một bữa tiệc)
- **Lưu ý:** Phân biệt với thì hiện tại tiếp diễn chỉ hành động đang xảy ra lúc nói (không có trạng từ thời gian tương lai).
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - My Best Friend',
          order: 3,
          objectives: ['Đọc hiểu về người bạn thân', 'Tìm thông tin chi tiết'],
          type: 'reading',
          reading: {
            title: 'My Best Friend',
            passage: 'My best friend is Mai. She is twelve years old. She is a student at my school. Mai is tall and thin. She has long black hair and big brown eyes. She is very clever and hard-working. She always gets good marks in class. Mai is also very kind and funny. She often helps me with my homework and makes me laugh. In her free time, she likes reading books and listening to music. We often play badminton together after school. I am very happy to have a friend like Mai.',
            questions: [
              { question: 'How old is Mai?', options: ['Ten years old', 'Eleven years old', 'Twelve years old'], answer: 'Twelve years old' },
              { question: 'What does Mai look like?', options: ['She is short and chubby', 'She is tall and thin', 'She is tall and chubby'], answer: 'She is tall and thin' },
              { question: 'What color are her eyes?', options: ['Blue', 'Black', 'Brown'], answer: 'Brown' },
              { question: 'What is Mai like?', options: ['She is clever, hard-working, kind, and funny', 'She is lazy and quiet', 'She is active but not clever'], answer: 'She is clever, hard-working, kind, and funny' },
              { question: 'What do they often do together after school?', options: ['Read books', 'Listen to music', 'Play badminton'], answer: 'Play badminton' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit4',
      title: 'Unit 4: My Neighbourhood',
      order: 4,
      description: 'Từ vựng về các địa điểm trong khu phố. Ngữ pháp: So sánh hơn của tính từ.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Places in a neighbourhood',
          order: 1,
          objectives: ['Từ vựng về các địa điểm', 'Chỉ đường cơ bản'],
          type: 'vocabulary',
          words: [
            { word: 'square', ipa: '/skweər/', pos: 'n', meaning_vi: 'quảng trường', example_en: 'We met at the town square.', example_vi: 'Chúng tôi gặp nhau ở quảng trường thị trấn.' },
            { word: 'art gallery', ipa: '/ˈɑːt ˌɡæl.ər.i/', pos: 'n', meaning_vi: 'phòng tranh', example_en: 'There are many beautiful paintings in the art gallery.', example_vi: 'Có rất nhiều bức tranh đẹp trong phòng tranh.' },
            { word: 'cathedral', ipa: '/kəˈθiː.drəl/', pos: 'n', meaning_vi: 'nhà thờ lớn', example_en: 'The cathedral is very old.', example_vi: 'Nhà thờ lớn rất cổ kính.' },
            { word: 'temple', ipa: '/ˈtem.pəl/', pos: 'n', meaning_vi: 'đền, miếu', example_en: 'Many people visit the temple on holidays.', example_vi: 'Nhiều người đến thăm đền vào các dịp lễ.' },
            { word: 'railway station', ipa: '/ˈreɪl.weɪ ˌsteɪ.ʃən/', pos: 'n', meaning_vi: 'nhà ga xe lửa', example_en: 'The train leaves from the railway station.', example_vi: 'Chuyến tàu khởi hành từ nhà ga xe lửa.' },
            { word: 'memorial', ipa: '/məˈmɔː.ri.əl/', pos: 'n', meaning_vi: 'đài tưởng niệm', example_en: 'They built a memorial for the soldiers.', example_vi: 'Họ đã xây dựng một đài tưởng niệm cho các chiến sĩ.' },
            { word: 'statue', ipa: '/ˈstætʃ.uː/', pos: 'n', meaning_vi: 'bức tượng', example_en: 'There is a statue in the park.', example_vi: 'Có một bức tượng trong công viên.' },
            { word: 'palace', ipa: '/ˈpæl.ɪs/', pos: 'n', meaning_vi: 'cung điện', example_en: 'The king lives in a palace.', example_vi: 'Nhà vua sống trong một cung điện.' },
            { word: 'narrow', ipa: '/ˈnær.əʊ/', pos: 'adj', meaning_vi: 'hẹp', example_en: 'The street is very narrow.', example_vi: 'Con phố rất hẹp.' },
            { word: 'wide', ipa: '/waɪd/', pos: 'adj', meaning_vi: 'rộng', example_en: 'The river is wide.', example_vi: 'Con sông rất rộng.' },
            { word: 'noisy', ipa: '/ˈnɔɪ.zi/', pos: 'adj', meaning_vi: 'ồn ào', example_en: 'The city is very noisy.', example_vi: 'Thành phố rất ồn ào.' },
            { word: 'quiet', ipa: '/ˈkwaɪ.ət/', pos: 'adj', meaning_vi: 'yên tĩnh', example_en: 'The library is a quiet place.', example_vi: 'Thư viện là một nơi yên tĩnh.' },
            { word: 'polluted', ipa: '/pəˈluː.tɪd/', pos: 'adj', meaning_vi: 'bị ô nhiễm', example_en: 'The air here is polluted.', example_vi: 'Không khí ở đây bị ô nhiễm.' },
            { word: 'historic', ipa: '/hɪˈstɒr.ɪk/', pos: 'adj', meaning_vi: 'có tính lịch sử', example_en: 'Hoi An is a historic city.', example_vi: 'Hội An là một thành phố lịch sử.' },
            { word: 'modern', ipa: '/ˈmɒd.ən/', pos: 'adj', meaning_vi: 'hiện đại', example_en: 'They live in a modern apartment.', example_vi: 'Họ sống trong một căn hộ hiện đại.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Comparative Adjectives',
          order: 2,
          objectives: ['So sánh hơn của tính từ'],
          type: 'grammar',
          grammar: {
            title: 'Comparative Adjectives',
            content: `
### So sánh hơn của tính từ (Comparative Adjectives)
- **Cách dùng:** Dùng để so sánh hai người, hai vật hoặc hai sự việc với nhau.
- **Cấu trúc:**
  - **Tính từ ngắn (1 âm tiết):** S1 + am/is/are + adj-er + than + S2
    - Ví dụ: My house is **smaller than** your house. (Nhà của tôi nhỏ hơn nhà của bạn)
  - **Tính từ dài (2 âm tiết trở lên):** S1 + am/is/are + more + adj + than + S2
    - Ví dụ: This book is **more interesting than** that one. (Cuốn sách này thú vị hơn cuốn kia)
- **Lưu ý:**
  - Tính từ kết thúc bằng "y" (2 âm tiết): Đổi "y" thành "i" rồi thêm "er". (Ví dụ: noisy -> noisier)
  - Tính từ kết thúc bằng 1 nguyên âm + 1 phụ âm: Gấp đôi phụ âm cuối rồi thêm "er". (Ví dụ: big -> bigger)
  - Các trường hợp bất quy tắc: good -> better, bad -> worse, far -> farther/further.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - My Neighbourhood',
          order: 3,
          objectives: ['Đọc hiểu về khu phố', 'Tìm thông tin chi tiết'],
          type: 'reading',
          reading: {
            title: 'My Neighbourhood',
            passage: 'I live in a quiet neighbourhood in the suburbs. It is a very nice place to live. There are many trees and flowers along the streets. Near my house, there is a small park where children can play. There is also a supermarket, a bakery, and a pharmacy. The people in my neighbourhood are very friendly and helpful. However, there is no cinema or shopping mall here. If we want to watch a movie or go shopping, we have to go to the city center. The city center is noisier and more crowded than my neighbourhood, but it has more things to do.',
            questions: [
              { question: 'Where does the writer live?', options: ['In the city center', 'In a quiet neighbourhood in the suburbs', 'In a noisy neighbourhood'], answer: 'In a quiet neighbourhood in the suburbs' },
              { question: 'What is near the writer\'s house?', options: ['A cinema and a shopping mall', 'A park, a supermarket, a bakery, and a pharmacy', 'A big hospital'], answer: 'A park, a supermarket, a bakery, and a pharmacy' },
              { question: 'What are the people in the neighbourhood like?', options: ['Friendly and helpful', 'Noisy and busy', 'Quiet and shy'], answer: 'Friendly and helpful' },
              { question: 'What does the neighbourhood NOT have?', options: ['A park', 'A bakery', 'A cinema or shopping mall'], answer: 'A cinema or shopping mall' },
              { question: 'How is the city center compared to the neighbourhood?', options: ['Quieter and less crowded', 'Noisier and more crowded', 'Cleaner and safer'], answer: 'Noisier and more crowded' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit5',
      title: 'Unit 5: Natural Wonders of the World',
      order: 5,
      description: 'Từ vựng về các kỳ quan thiên nhiên. Ngữ pháp: So sánh nhất của tính từ.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Natural wonders',
          order: 1,
          objectives: ['Từ vựng về các kỳ quan thiên nhiên', 'Từ vựng miêu tả phong cảnh'],
          type: 'vocabulary',
          words: [
            { word: 'mountain', ipa: '/ˈmaʊn.tɪn/', pos: 'n', meaning_vi: 'ngọn núi', example_en: 'Mount Everest is the highest mountain in the world.', example_vi: 'Đỉnh Everest là ngọn núi cao nhất thế giới.' },
            { word: 'river', ipa: '/ˈrɪv.ər/', pos: 'n', meaning_vi: 'dòng sông', example_en: 'The Amazon River is very long.', example_vi: 'Sông Amazon rất dài.' },
            { word: 'waterfall', ipa: '/ˈwɔː.tə.fɔːl/', pos: 'n', meaning_vi: 'thác nước', example_en: 'Niagara Falls is a famous waterfall.', example_vi: 'Thác Niagara là một thác nước nổi tiếng.' },
            { word: 'forest', ipa: '/ˈfɒr.ɪst/', pos: 'n', meaning_vi: 'khu rừng', example_en: 'There are many trees in the forest.', example_vi: 'Có rất nhiều cây trong rừng.' },
            { word: 'cave', ipa: '/keɪv/', pos: 'n', meaning_vi: 'hang động', example_en: 'Son Doong is the largest cave in the world.', example_vi: 'Sơn Đoòng là hang động lớn nhất thế giới.' },
            { word: 'desert', ipa: '/ˈdez.ət/', pos: 'n', meaning_vi: 'sa mạc', example_en: 'The Sahara is a hot desert.', example_vi: 'Sahara là một sa mạc nóng bức.' },
            { word: 'lake', ipa: '/leɪk/', pos: 'n', meaning_vi: 'hồ nước', example_en: 'Hoan Kiem Lake is in Ha Noi.', example_vi: 'Hồ Hoàn Kiếm ở Hà Nội.' },
            { word: 'beach', ipa: '/biːtʃ/', pos: 'n', meaning_vi: 'bãi biển', example_en: 'We went to the beach yesterday.', example_vi: 'Chúng tôi đã đi biển ngày hôm qua.' },
            { word: 'island', ipa: '/ˈaɪ.lənd/', pos: 'n', meaning_vi: 'hòn đảo', example_en: 'Phu Quoc is a beautiful island.', example_vi: 'Phú Quốc là một hòn đảo xinh đẹp.' },
            { word: 'valley', ipa: '/ˈvæl.i/', pos: 'n', meaning_vi: 'thung lũng', example_en: 'The village is in a deep valley.', example_vi: 'Ngôi làng nằm trong một thung lũng sâu.' },
            { word: 'amazing', ipa: '/əˈmeɪ.zɪŋ/', pos: 'adj', meaning_vi: 'đáng kinh ngạc', example_en: 'The view from the mountain is amazing.', example_vi: 'Khung cảnh từ trên núi thật đáng kinh ngạc.' },
            { word: 'beautiful', ipa: '/ˈbjuː.tɪ.fəl/', pos: 'adj', meaning_vi: 'xinh đẹp', example_en: 'Ha Long Bay is very beautiful.', example_vi: 'Vịnh Hạ Long rất xinh đẹp.' },
            { word: 'fantastic', ipa: '/fænˈtæs.tɪk/', pos: 'adj', meaning_vi: 'tuyệt vời', example_en: 'We had a fantastic holiday.', example_vi: 'Chúng tôi đã có một kỳ nghỉ tuyệt vời.' },
            { word: 'wonderful', ipa: '/ˈwʌn.də.fəl/', pos: 'adj', meaning_vi: 'tuyệt diệu', example_en: 'It is a wonderful place to visit.', example_vi: 'Đó là một nơi tuyệt diệu để đến thăm.' },
            { word: 'natural', ipa: '/ˈnætʃ.ər.əl/', pos: 'adj', meaning_vi: 'thuộc về thiên nhiên', example_en: 'Vietnam has many natural wonders.', example_vi: 'Việt Nam có nhiều kỳ quan thiên nhiên.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Superlative Adjectives',
          order: 2,
          objectives: ['So sánh nhất của tính từ'],
          type: 'grammar',
          grammar: {
            title: 'Superlative Adjectives',
            content: `
### So sánh nhất của tính từ (Superlative Adjectives)
- **Cách dùng:** Dùng để so sánh một người, một vật hoặc một sự việc với tất cả những người, vật, sự việc khác trong cùng một nhóm (từ 3 đối tượng trở lên).
- **Cấu trúc:**
  - **Tính từ ngắn (1 âm tiết):** S + am/is/are + the + adj-est + (in/of...)
    - Ví dụ: Mount Everest is **the highest** mountain in the world. (Đỉnh Everest là ngọn núi cao nhất thế giới)
  - **Tính từ dài (2 âm tiết trở lên):** S + am/is/are + the most + adj + (in/of...)
    - Ví dụ: This is **the most interesting** book I have ever read. (Đây là cuốn sách thú vị nhất mà tôi từng đọc)
- **Lưu ý:**
  - Tính từ kết thúc bằng "y" (2 âm tiết): Đổi "y" thành "i" rồi thêm "est". (Ví dụ: noisy -> the noisiest)
  - Tính từ kết thúc bằng 1 nguyên âm + 1 phụ âm: Gấp đôi phụ âm cuối rồi thêm "est". (Ví dụ: big -> the biggest)
  - Các trường hợp bất quy tắc: good -> the best, bad -> the worst, far -> the farthest/furthest.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Natural Wonders of Vietnam',
          order: 3,
          objectives: ['Đọc hiểu về kỳ quan thiên nhiên', 'Tìm thông tin chi tiết'],
          type: 'reading',
          reading: {
            title: 'Natural Wonders of Vietnam',
            passage: 'Vietnam is famous for its beautiful natural wonders. One of the most popular places is Ha Long Bay. It is in Quang Ninh Province. Ha Long Bay has thousands of limestone islands and caves. Many tourists visit Ha Long Bay every year to enjoy the stunning scenery and take boat trips. Another amazing wonder is Son Doong Cave in Quang Binh Province. It is the largest cave in the world. Inside the cave, there is a river, a jungle, and even its own weather system. Exploring Son Doong Cave is an unforgettable experience for adventurers.',
            questions: [
              { question: 'Where is Ha Long Bay?', options: ['In Quang Binh Province', 'In Quang Ninh Province', 'In Ha Noi'], answer: 'In Quang Ninh Province' },
              { question: 'What does Ha Long Bay have?', options: ['Thousands of limestone islands and caves', 'Many tall mountains', 'A large desert'], answer: 'Thousands of limestone islands and caves' },
              { question: 'Why do tourists visit Ha Long Bay?', options: ['To go shopping', 'To enjoy the stunning scenery and take boat trips', 'To climb mountains'], answer: 'To enjoy the stunning scenery and take boat trips' },
              { question: 'What is special about Son Doong Cave?', options: ['It is the smallest cave in the world', 'It is the largest cave in the world', 'It is the oldest cave in the world'], answer: 'It is the largest cave in the world' },
              { question: 'What can you find inside Son Doong Cave?', options: ['A river, a jungle, and its own weather system', 'A city and many houses', 'A big lake and many fish'], answer: 'A river, a jungle, and its own weather system' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit6',
      title: 'Unit 6: Our Tet Holiday',
      order: 6,
      description: 'Từ vựng về ngày Tết. Ngữ pháp: Should/Shouldn\'t, Will/Won\'t.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Tet holiday',
          order: 1,
          objectives: ['Từ vựng về các hoạt động và đồ vật trong ngày Tết'],
          type: 'vocabulary',
          words: [
            { word: 'peach blossom', ipa: '/piːtʃ ˈblɒs.əm/', pos: 'n', meaning_vi: 'hoa đào', example_en: 'In the North, people decorate their houses with peach blossoms.', example_vi: 'Ở miền Bắc, mọi người trang trí nhà cửa bằng hoa đào.' },
            { word: 'apricot blossom', ipa: '/ˈeɪ.prɪ.kɒt ˈblɒs.əm/', pos: 'n', meaning_vi: 'hoa mai', example_en: 'In the South, apricot blossoms are popular during Tet.', example_vi: 'Ở miền Nam, hoa mai rất phổ biến trong dịp Tết.' },
            { word: 'kumquat tree', ipa: '/ˈkʌm.kwɒt triː/', pos: 'n', meaning_vi: 'cây quất', example_en: 'We bought a beautiful kumquat tree for Tet.', example_vi: 'Chúng tôi đã mua một cây quất đẹp cho ngày Tết.' },
            { word: 'lucky money', ipa: '/ˈlʌk.i ˈmʌn.i/', pos: 'n', meaning_vi: 'tiền lì xì', example_en: 'Children love receiving lucky money.', example_vi: 'Trẻ em thích nhận tiền lì xì.' },
            { word: 'fireworks', ipa: '/ˈfaɪə.wɜːks/', pos: 'n', meaning_vi: 'pháo hoa', example_en: 'We watched the fireworks on New Year\'s Eve.', example_vi: 'Chúng tôi đã xem pháo hoa vào đêm giao thừa.' },
            { word: 'decorate', ipa: '/ˈdek.ə.reɪt/', pos: 'v', meaning_vi: 'trang trí', example_en: 'We decorate our house before Tet.', example_vi: 'Chúng tôi trang trí nhà cửa trước Tết.' },
            { word: 'clean', ipa: '/kliːn/', pos: 'v', meaning_vi: 'dọn dẹp', example_en: 'I help my parents clean the house.', example_vi: 'Tôi giúp bố mẹ dọn dẹp nhà cửa.' },
            { word: 'visit', ipa: '/ˈvɪz.ɪt/', pos: 'v', meaning_vi: 'thăm viếng', example_en: 'We visit our relatives on the first day of Tet.', example_vi: 'Chúng tôi đi thăm họ hàng vào ngày mùng một Tết.' },
            { word: 'relative', ipa: '/ˈrel.ə.tɪv/', pos: 'n', meaning_vi: 'họ hàng', example_en: 'Many relatives come to our house during Tet.', example_vi: 'Nhiều người họ hàng đến nhà chúng tôi trong dịp Tết.' },
            { word: 'wish', ipa: '/wɪʃ/', pos: 'v', meaning_vi: 'chúc', example_en: 'I wish you a happy new year.', example_vi: 'Tôi chúc bạn một năm mới hạnh phúc.' },
            { word: 'special food', ipa: '/ˈspeʃ.əl fuːd/', pos: 'n', meaning_vi: 'món ăn đặc biệt', example_en: 'Banh chung is a special food for Tet.', example_vi: 'Bánh chưng là một món ăn đặc biệt cho ngày Tết.' },
            { word: 'calendar', ipa: '/ˈkæl.ən.dər/', pos: 'n', meaning_vi: 'lịch', example_en: 'We need a new calendar for the new year.', example_vi: 'Chúng tôi cần một cuốn lịch mới cho năm mới.' },
            { word: 'celebrate', ipa: '/ˈsel.ə.breɪt/', pos: 'v', meaning_vi: 'kỷ niệm, ăn mừng', example_en: 'We celebrate Tet with our family.', example_vi: 'Chúng tôi ăn mừng Tết cùng gia đình.' },
            { word: 'first-footer', ipa: '/ˌfɜːstˈfʊt.ər/', pos: 'n', meaning_vi: 'người xông đất', example_en: 'The first-footer brings good luck to the family.', example_vi: 'Người xông đất mang lại may mắn cho gia đình.' },
            { word: 'pagoda', ipa: '/pəˈɡəʊ.də/', pos: 'n', meaning_vi: 'ngôi chùa', example_en: 'Many people go to the pagoda to pray for good luck.', example_vi: 'Nhiều người đi chùa để cầu may mắn.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Should/Shouldn\'t & Will/Won\'t',
          order: 2,
          objectives: ['Sử dụng Should/Shouldn\'t để khuyên bảo', 'Sử dụng Will/Won\'t để dự đoán tương lai'],
          type: 'grammar',
          grammar: {
            title: 'Should/Shouldn\'t & Will/Won\'t',
            content: `
### 1. Should / Shouldn't (Nên / Không nên)
- **Cách dùng:** Dùng để đưa ra lời khuyên, ý kiến về việc gì đó là tốt hay không tốt để làm.
- **Cấu trúc:**
  - Khẳng định: S + should + V (nguyên thể)
    - Ví dụ: You **should help** your parents clean the house. (Bạn nên giúp bố mẹ dọn dẹp nhà cửa)
  - Phủ định: S + shouldn't + V (nguyên thể)
    - Ví dụ: You **shouldn't eat** too much candy. (Bạn không nên ăn quá nhiều kẹo)
  - Nghi vấn: Should + S + V (nguyên thể)?
    - Ví dụ: **Should I buy** this shirt? (Tôi có nên mua chiếc áo này không?)

### 2. Will / Won't (Sẽ / Sẽ không)
- **Cách dùng:** Dùng để diễn tả một quyết định tại thời điểm nói, một dự đoán không có căn cứ chắc chắn, hoặc một lời hứa.
- **Cấu trúc:**
  - Khẳng định: S + will + V (nguyên thể)
    - Ví dụ: I **will visit** my grandparents tomorrow. (Tôi sẽ đi thăm ông bà vào ngày mai)
  - Phủ định: S + won't (will not) + V (nguyên thể)
    - Ví dụ: It **won't rain** tomorrow. (Trời sẽ không mưa vào ngày mai)
  - Nghi vấn: Will + S + V (nguyên thể)?
    - Ví dụ: **Will you come** to my party? (Bạn sẽ đến dự tiệc của tôi chứ?)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Tet in Vietnam',
          order: 3,
          objectives: ['Đọc hiểu về ngày Tết', 'Tìm thông tin chi tiết'],
          type: 'reading',
          reading: {
            title: 'Tet in Vietnam',
            passage: 'Tet is the most important festival in Vietnam. It usually happens in late January or early February. Before Tet, people clean and decorate their houses. They buy peach blossoms or apricot blossoms to make their homes look beautiful. During Tet, families gather together to celebrate the new year. They eat special foods like banh chung, spring rolls, and sticky rice. Children are very happy because they get lucky money in red envelopes from adults. People also visit their relatives and friends to wish them a happy and prosperous new year. It is a time for joy, hope, and new beginnings.',
            questions: [
              { question: 'When does Tet usually happen?', options: ['In late December or early January', 'In late January or early February', 'In late February or early March'], answer: 'In late January or early February' },
              { question: 'What do people do before Tet?', options: ['They clean and decorate their houses', 'They travel to other countries', 'They buy new cars'], answer: 'They clean and decorate their houses' },
              { question: 'What do people buy to decorate their homes?', options: ['Christmas trees', 'Peach blossoms or apricot blossoms', 'Roses and sunflowers'], answer: 'Peach blossoms or apricot blossoms' },
              { question: 'Why are children happy during Tet?', options: ['Because they don\'t have to go to school', 'Because they get lucky money', 'Because they can watch fireworks'], answer: 'Because they get lucky money' },
              { question: 'What do people do when they visit relatives and friends?', options: ['They give them presents', 'They wish them a happy new year', 'They eat all their food'], answer: 'They wish them a happy new year' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit7',
      title: 'Unit 7: Television',
      order: 7,
      description: 'Từ vựng về các chương trình truyền hình. Ngữ pháp: Từ để hỏi (Wh-words), Liên từ (Conjunctions).',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - TV programmes',
          order: 1,
          objectives: ['Từ vựng về các thể loại chương trình truyền hình'],
          type: 'vocabulary',
          words: [
            { word: 'channel', ipa: '/ˈtʃæn.əl/', pos: 'n', meaning_vi: 'kênh truyền hình', example_en: 'What channel is the football match on?', example_vi: 'Trận bóng đá chiếu trên kênh nào?' },
            { word: 'programme', ipa: '/ˈprəʊ.ɡræm/', pos: 'n', meaning_vi: 'chương trình', example_en: 'My favorite TV programme is MasterChef.', example_vi: 'Chương trình truyền hình yêu thích của tôi là Vua Đầu Bếp.' },
            { word: 'comedy', ipa: '/ˈkɒm.ə.di/', pos: 'n', meaning_vi: 'hài kịch', example_en: 'I love watching comedies because they make me laugh.', example_vi: 'Tôi thích xem hài kịch vì chúng làm tôi cười.' },
            { word: 'documentary', ipa: '/ˌdɒk.jəˈmen.tər.i/', pos: 'n', meaning_vi: 'phim tài liệu', example_en: 'I watched a documentary about animals.', example_vi: 'Tôi đã xem một bộ phim tài liệu về động vật.' },
            { word: 'educational', ipa: '/ˌedʒ.ʊˈkeɪ.ʃən.əl/', pos: 'adj', meaning_vi: 'mang tính giáo dục', example_en: 'This channel has many educational programmes for children.', example_vi: 'Kênh này có nhiều chương trình giáo dục cho trẻ em.' },
            { word: 'entertaining', ipa: '/ˌen.təˈteɪ.nɪŋ/', pos: 'adj', meaning_vi: 'mang tính giải trí', example_en: 'The show was very entertaining.', example_vi: 'Chương trình rất mang tính giải trí.' },
            { word: 'game show', ipa: '/ˈɡeɪm ˌʃəʊ/', pos: 'n', meaning_vi: 'chương trình trò chơi', example_en: 'Who Wants to Be a Millionaire is a famous game show.', example_vi: 'Ai Là Triệu Phú là một chương trình trò chơi nổi tiếng.' },
            { word: 'newsreader', ipa: '/ˈnjuːzˌriː.dər/', pos: 'n', meaning_vi: 'người đọc bản tin', example_en: 'The newsreader is reading the evening news.', example_vi: 'Người đọc bản tin đang đọc tin tức buổi tối.' },
            { word: 'viewer', ipa: '/ˈvjuː.ər/', pos: 'n', meaning_vi: 'người xem', example_en: 'The programme has millions of viewers.', example_vi: 'Chương trình có hàng triệu người xem.' },
            { word: 'weatherman', ipa: '/ˈweð.ə.mæn/', pos: 'n', meaning_vi: 'người dẫn chương trình thời tiết', example_en: 'The weatherman says it will rain tomorrow.', example_vi: 'Người dẫn chương trình thời tiết nói ngày mai trời sẽ mưa.' },
            { word: 'character', ipa: '/ˈkær.ək.tər/', pos: 'n', meaning_vi: 'nhân vật', example_en: 'Mickey Mouse is a famous cartoon character.', example_vi: 'Chuột Mickey là một nhân vật hoạt hình nổi tiếng.' },
            { word: 'cartoon', ipa: '/kɑːˈtuːn/', pos: 'n', meaning_vi: 'phim hoạt hình', example_en: 'Children love watching cartoons.', example_vi: 'Trẻ em thích xem phim hoạt hình.' },
            { word: 'remote control', ipa: '/rɪˌməʊt kənˈtrəʊl/', pos: 'n', meaning_vi: 'điều khiển từ xa', example_en: 'Where is the remote control?', example_vi: 'Cái điều khiển từ xa ở đâu?' },
            { word: 'schedule', ipa: '/ˈʃedʒ.uːl/', pos: 'n', meaning_vi: 'lịch trình', example_en: 'Let\'s check the TV schedule.', example_vi: 'Hãy kiểm tra lịch phát sóng truyền hình.' },
            { word: 'broadcast', ipa: '/ˈbrɔːd.kɑːst/', pos: 'v', meaning_vi: 'phát sóng', example_en: 'The match will be broadcast live.', example_vi: 'Trận đấu sẽ được phát sóng trực tiếp.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Wh-words & Conjunctions',
          order: 2,
          objectives: ['Sử dụng các từ để hỏi', 'Sử dụng liên từ (and, but, so, because)'],
          type: 'grammar',
          grammar: {
            title: 'Wh-words & Conjunctions',
            content: `
### 1. Từ để hỏi (Wh-words)
- **What:** Cái gì (hỏi về sự vật, sự việc) - *What is your name?*
- **Who:** Ai (hỏi về người) - *Who is that man?*
- **Where:** Ở đâu (hỏi về nơi chốn) - *Where do you live?*
- **When:** Khi nào (hỏi về thời gian) - *When is your birthday?*
- **Why:** Tại sao (hỏi về lý do) - *Why are you late?*
- **How:** Như thế nào (hỏi về cách thức, phương tiện) - *How do you go to school?*
- **How many/much:** Bao nhiêu (hỏi về số lượng) - *How many books do you have?*
- **How often:** Bao lâu một lần (hỏi về tần suất) - *How often do you watch TV?*

### 2. Liên từ (Conjunctions)
- **and (và):** Dùng để thêm thông tin.
  - Ví dụ: I like apples **and** bananas.
- **but (nhưng):** Dùng để nối hai ý trái ngược nhau.
  - Ví dụ: I like watching TV, **but** I don't have much time.
- **so (vì vậy, cho nên):** Dùng để chỉ kết quả.
  - Ví dụ: It was raining, **so** we stayed at home.
- **because (bởi vì):** Dùng để chỉ nguyên nhân, lý do.
  - Ví dụ: I didn't go to school **because** I was sick.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - My Favorite TV Programme',
          order: 3,
          objectives: ['Đọc hiểu về chương trình truyền hình', 'Tìm thông tin chi tiết'],
          type: 'reading',
          reading: {
            title: 'My Favorite TV Programme',
            passage: 'My favorite TV programme is "Animals and Us". It is a documentary about wild animals. It is broadcast on VTV3 at 8 PM every Saturday. I like this programme because it is very educational and interesting. I can learn a lot about different animals around the world, such as lions, elephants, and penguins. The programme also shows how animals live in their natural habitats. The narrator has a very warm and clear voice. I usually watch it with my family after dinner. It is a great way to relax and learn new things at the same time.',
            questions: [
              { question: 'What is the name of the writer\'s favorite TV programme?', options: ['Animals and Us', 'Wild World', 'Nature Today'], answer: 'Animals and Us' },
              { question: 'What kind of programme is it?', options: ['A comedy', 'A game show', 'A documentary'], answer: 'A documentary' },
              { question: 'When is it broadcast?', options: ['At 8 PM every Sunday', 'At 8 PM every Saturday', 'At 7 PM every Saturday'], answer: 'At 8 PM every Saturday' },
              { question: 'Why does the writer like the programme?', options: ['Because it is funny', 'Because it is educational and interesting', 'Because it has famous actors'], answer: 'Because it is educational and interesting' },
              { question: 'Who does the writer usually watch the programme with?', options: ['Friends', 'Classmates', 'Family'], answer: 'Family' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit8',
      title: 'Unit 8: Sports and Games',
      order: 8,
      description: 'Từ vựng về thể thao và trò chơi. Ngữ pháp: Quá khứ đơn, Câu mệnh lệnh.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Sports and games',
          order: 1,
          objectives: ['Từ vựng về các môn thể thao và trò chơi'],
          type: 'vocabulary',
          words: [
            { word: 'aerobics', ipa: '/eəˈrəʊ.bɪks/', pos: 'n', meaning_vi: 'thể dục nhịp điệu', example_en: 'She does aerobics every morning.', example_vi: 'Cô ấy tập thể dục nhịp điệu mỗi sáng.' },
            { word: 'badminton', ipa: '/ˈbæd.mɪn.tən/', pos: 'n', meaning_vi: 'cầu lông', example_en: 'We play badminton in the park.', example_vi: 'Chúng tôi chơi cầu lông trong công viên.' },
            { word: 'basketball', ipa: '/ˈbɑː.skɪt.bɔːl/', pos: 'n', meaning_vi: 'bóng rổ', example_en: 'He is a tall basketball player.', example_vi: 'Anh ấy là một cầu thủ bóng rổ cao kều.' },
            { word: 'boxing', ipa: '/ˈbɒk.sɪŋ/', pos: 'n', meaning_vi: 'quyền anh', example_en: 'Boxing is a dangerous sport.', example_vi: 'Quyền anh là một môn thể thao nguy hiểm.' },
            { word: 'cycling', ipa: '/ˈsaɪ.klɪŋ/', pos: 'n', meaning_vi: 'đạp xe', example_en: 'Cycling is good for your health.', example_vi: 'Đạp xe rất tốt cho sức khỏe của bạn.' },
            { word: 'football', ipa: '/ˈfʊt.bɔːl/', pos: 'n', meaning_vi: 'bóng đá', example_en: 'Football is the most popular sport in Vietnam.', example_vi: 'Bóng đá là môn thể thao phổ biến nhất ở Việt Nam.' },
            { word: 'karate', ipa: '/kəˈrɑː.ti/', pos: 'n', meaning_vi: 'võ karate', example_en: 'He has a black belt in karate.', example_vi: 'Anh ấy có đai đen môn karate.' },
            { word: 'marathon', ipa: '/ˈmær.ə.θən/', pos: 'n', meaning_vi: 'chạy ma-ra-tông', example_en: 'She ran a marathon last year.', example_vi: 'Cô ấy đã chạy ma-ra-tông năm ngoái.' },
            { word: 'skating', ipa: '/ˈskeɪ.tɪŋ/', pos: 'n', meaning_vi: 'trượt băng, trượt patin', example_en: 'They go skating in the winter.', example_vi: 'Họ đi trượt băng vào mùa đông.' },
            { word: 'skiing', ipa: '/ˈskiː.ɪŋ/', pos: 'n', meaning_vi: 'trượt tuyết', example_en: 'Skiing is a popular winter sport.', example_vi: 'Trượt tuyết là một môn thể thao mùa đông phổ biến.' },
            { word: 'swimming', ipa: '/ˈswɪm.ɪŋ/', pos: 'n', meaning_vi: 'bơi lội', example_en: 'I go swimming twice a week.', example_vi: 'Tôi đi bơi hai lần một tuần.' },
            { word: 'table tennis', ipa: '/ˈteɪ.bəl ˌten.ɪs/', pos: 'n', meaning_vi: 'bóng bàn', example_en: 'We have a table tennis table in the garage.', example_vi: 'Chúng tôi có một bàn bóng bàn trong nhà để xe.' },
            { word: 'tennis', ipa: '/ˈten.ɪs/', pos: 'n', meaning_vi: 'quần vợt', example_en: 'He plays tennis very well.', example_vi: 'Anh ấy chơi quần vợt rất giỏi.' },
            { word: 'volleyball', ipa: '/ˈvɒl.i.bɔːl/', pos: 'n', meaning_vi: 'bóng chuyền', example_en: 'They are playing volleyball on the beach.', example_vi: 'Họ đang chơi bóng chuyền trên bãi biển.' },
            { word: 'yoga', ipa: '/ˈjəʊ.ɡə/', pos: 'n', meaning_vi: 'yoga', example_en: 'Yoga helps me relax.', example_vi: 'Yoga giúp tôi thư giãn.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Past Simple & Imperatives',
          order: 2,
          objectives: ['Thì quá khứ đơn', 'Câu mệnh lệnh'],
          type: 'grammar',
          grammar: {
            title: 'Past Simple & Imperatives',
            content: `
### 1. Thì quá khứ đơn (Past Simple)
- **Cách dùng:** Diễn tả hành động đã xảy ra và kết thúc trong quá khứ.
- **Dấu hiệu:** yesterday, last (week, month, year...), ago, in + năm trong quá khứ...
- **Cấu trúc (với động từ thường):**
  - Khẳng định: S + V-ed / V2 (bất quy tắc)
    - Ví dụ: I **played** football yesterday. We **went** to the cinema last night.
  - Phủ định: S + didn't (did not) + V (nguyên thể)
    - Ví dụ: I **didn't play** football yesterday.
  - Nghi vấn: Did + S + V (nguyên thể)?
    - Ví dụ: **Did you play** football yesterday?

### 2. Câu mệnh lệnh (Imperatives)
- **Cách dùng:** Dùng để ra lệnh, yêu cầu, hướng dẫn hoặc đưa ra lời khuyên.
- **Cấu trúc:**
  - Khẳng định: V (nguyên thể) + ...!
    - Ví dụ: **Stand up!** (Đứng lên!) / **Pass** the ball! (Chuyền bóng đi!)
  - Phủ định: Don't + V (nguyên thể) + ...!
    - Ví dụ: **Don't talk** in class! (Đừng nói chuyện trong lớp!) / **Don't give up!** (Đừng bỏ cuộc!)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Pele, the King of Football',
          order: 3,
          objectives: ['Đọc hiểu về một vận động viên nổi tiếng', 'Tìm thông tin chi tiết'],
          type: 'reading',
          reading: {
            title: 'Pele, the King of Football',
            passage: 'Pelé is widely regarded as the greatest football player of all time. He was born in 1940 in Brazil. His real name is Edson Arantes do Nascimento. He started playing football when he was very young. In 1958, at the age of 17, he won his first World Cup with the Brazilian national team. He scored two goals in the final match. Pelé won three World Cups in his career (1958, 1962, and 1970). He scored 1,281 goals in 1,363 games. People call him "The King of Football" because of his amazing skills and achievements. He retired in 1977 but remains a global ambassador for the sport.',
            questions: [
              { question: 'When was Pelé born?', options: ['In 1930', 'In 1940', 'In 1958'], answer: 'In 1940' },
              { question: 'What is his real name?', options: ['Edson Arantes do Nascimento', 'Ronaldo', 'Neymar'], answer: 'Edson Arantes do Nascimento' },
              { question: 'How old was he when he won his first World Cup?', options: ['15', '17', '20'], answer: '17' },
              { question: 'How many World Cups did Pelé win?', options: ['One', 'Two', 'Three'], answer: 'Three' },
              { question: 'Why do people call him "The King of Football"?', options: ['Because he is very rich', 'Because of his amazing skills and achievements', 'Because he is from Brazil'], answer: 'Because of his amazing skills and achievements' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit9',
      title: 'Unit 9: Cities of the World',
      order: 9,
      description: 'Từ vựng về các thành phố trên thế giới. Ngữ pháp: Tính từ sở hữu, Đại từ sở hữu.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Cities and landmarks',
          order: 1,
          objectives: ['Từ vựng về các thành phố và địa danh nổi tiếng'],
          type: 'vocabulary',
          words: [
            { word: 'continent', ipa: '/ˈkɒn.tɪ.nənt/', pos: 'n', meaning_vi: 'lục địa', example_en: 'Asia is the largest continent.', example_vi: 'Châu Á là lục địa lớn nhất.' },
            { word: 'capital', ipa: '/ˈkæp.ɪ.təl/', pos: 'n', meaning_vi: 'thủ đô', example_en: 'Hanoi is the capital of Vietnam.', example_vi: 'Hà Nội là thủ đô của Việt Nam.' },
            { word: 'landmark', ipa: '/ˈlænd.mɑːk/', pos: 'n', meaning_vi: 'địa danh, cột mốc', example_en: 'The Eiffel Tower is a famous landmark in Paris.', example_vi: 'Tháp Eiffel là một địa danh nổi tiếng ở Paris.' },
            { word: 'tower', ipa: '/taʊər/', pos: 'n', meaning_vi: 'tòa tháp', example_en: 'We climbed to the top of the tower.', example_vi: 'Chúng tôi đã leo lên đỉnh tháp.' },
            { word: 'bridge', ipa: '/brɪdʒ/', pos: 'n', meaning_vi: 'cây cầu', example_en: 'The Golden Gate Bridge is in San Francisco.', example_vi: 'Cầu Cổng Vàng ở San Francisco.' },
            { word: 'symbol', ipa: '/ˈsɪm.bəl/', pos: 'n', meaning_vi: 'biểu tượng', example_en: 'The dove is a symbol of peace.', example_vi: 'Chim bồ câu là biểu tượng của hòa bình.' },
            { word: 'popular', ipa: '/ˈpɒp.jə.lər/', pos: 'adj', meaning_vi: 'phổ biến, được yêu thích', example_en: 'Football is a popular sport.', example_vi: 'Bóng đá là một môn thể thao phổ biến.' },
            { word: 'well-known', ipa: '/ˌwelˈnəʊn/', pos: 'adj', meaning_vi: 'nổi tiếng', example_en: 'He is a well-known actor.', example_vi: 'Anh ấy là một diễn viên nổi tiếng.' },
            { word: 'delicious', ipa: '/dɪˈlɪʃ.əs/', pos: 'adj', meaning_vi: 'ngon miệng', example_en: 'The food is very delicious.', example_vi: 'Thức ăn rất ngon.' },
            { word: 'friendly', ipa: '/ˈfrend.li/', pos: 'adj', meaning_vi: 'thân thiện', example_en: 'The people here are very friendly.', example_vi: 'Người dân ở đây rất thân thiện.' },
            { word: 'crowded', ipa: '/ˈkraʊ.dɪd/', pos: 'adj', meaning_vi: 'đông đúc', example_en: 'The streets are crowded with people.', example_vi: 'Đường phố đông nghịt người.' },
            { word: 'exciting', ipa: '/ɪkˈsaɪ.tɪŋ/', pos: 'adj', meaning_vi: 'thú vị, hào hứng', example_en: 'New York is an exciting city.', example_vi: 'New York là một thành phố thú vị.' },
            { word: 'peaceful', ipa: '/ˈpiːs.fəl/', pos: 'adj', meaning_vi: 'thanh bình', example_en: 'I live in a peaceful village.', example_vi: 'Tôi sống trong một ngôi làng thanh bình.' },
            { word: 'safe', ipa: '/seɪf/', pos: 'adj', meaning_vi: 'an toàn', example_en: 'It is a safe place to live.', example_vi: 'Đó là một nơi an toàn để sống.' },
            { word: 'dangerous', ipa: '/ˈdeɪn.dʒər.əs/', pos: 'adj', meaning_vi: 'nguy hiểm', example_en: 'It is dangerous to swim here.', example_vi: 'Bơi ở đây rất nguy hiểm.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Possessive Adjectives & Pronouns',
          order: 2,
          objectives: ['Tính từ sở hữu', 'Đại từ sở hữu'],
          type: 'grammar',
          grammar: {
            title: 'Possessive Adjectives & Pronouns',
            content: `
### 1. Tính từ sở hữu (Possessive Adjectives)
- **Cách dùng:** Đứng trước danh từ để chỉ sự sở hữu (Cái gì của ai).
- **Các tính từ sở hữu:** my (của tôi), your (của bạn/các bạn), his (của anh ấy), her (của cô ấy), its (của nó), our (của chúng tôi), their (của họ).
- **Ví dụ:** This is **my** book. (Đây là sách của tôi) / **Her** hair is long. (Tóc của cô ấy dài)

### 2. Đại từ sở hữu (Possessive Pronouns)
- **Cách dùng:** Dùng để thay thế cho "Tính từ sở hữu + Danh từ" đã được nhắc đến trước đó để tránh lặp từ. Nó đứng một mình, KHÔNG có danh từ theo sau.
- **Các đại từ sở hữu:** mine (của tôi), yours (của bạn/các bạn), his (của anh ấy), hers (của cô ấy), ours (của chúng tôi), theirs (của họ). (Lưu ý: "its" hiếm khi được dùng như đại từ sở hữu).
- **Ví dụ:**
  - This book is **my book**. -> This book is **mine**.
  - Your car is red. **My car** is blue. -> Your car is red. **Mine** is blue.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Cities of the World',
          order: 3,
          objectives: ['Đọc hiểu về các thành phố', 'Tìm thông tin chi tiết'],
          type: 'reading',
          reading: {
            title: 'Cities of the World',
            passage: 'London is the capital city of the United Kingdom. It is a very old and historic city. There are many famous landmarks in London, such as Big Ben, the Tower of London, and the London Eye. The River Thames runs through the city. London is also a very modern and exciting city with many shops, restaurants, and museums. It is very crowded, especially in the summer when many tourists visit. The weather in London is often cloudy and rainy, but it is still a beautiful place to explore. People in London are usually polite and friendly.',
            questions: [
              { question: 'What is London the capital of?', options: ['The United States', 'The United Kingdom', 'France'], answer: 'The United Kingdom' },
              { question: 'What are some famous landmarks in London?', options: ['The Eiffel Tower and the Louvre', 'Big Ben, the Tower of London, and the London Eye', 'The Statue of Liberty and Central Park'], answer: 'Big Ben, the Tower of London, and the London Eye' },
              { question: 'Which river runs through London?', options: ['The Amazon River', 'The Nile River', 'The River Thames'], answer: 'The River Thames' },
              { question: 'What is the weather usually like in London?', options: ['Hot and sunny', 'Cloudy and rainy', 'Cold and snowy'], answer: 'Cloudy and rainy' },
              { question: 'What are the people in London usually like?', options: ['Polite and friendly', 'Rude and noisy', 'Quiet and shy'], answer: 'Polite and friendly' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit10',
      title: 'Unit 10: Our Houses in the Future',
      order: 10,
      description: 'Từ vựng về các loại nhà và thiết bị trong tương lai. Ngữ pháp: Will (cho tương lai), Might (cho khả năng).',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Future houses and appliances',
          order: 1,
          objectives: ['Từ vựng về các loại nhà và thiết bị trong tương lai'],
          type: 'vocabulary',
          words: [
            { word: 'UFO', ipa: '/ˌjuː.efˈəʊ/', pos: 'n', meaning_vi: 'vật thể bay không xác định (đĩa bay)', example_en: 'Some people believe they have seen a UFO.', example_vi: 'Một số người tin rằng họ đã nhìn thấy đĩa bay.' },
            { word: 'space', ipa: '/speɪs/', pos: 'n', meaning_vi: 'không gian, vũ trụ', example_en: 'Astronauts travel into space.', example_vi: 'Các phi hành gia du hành vào không gian.' },
            { word: 'planet', ipa: '/ˈplæn.ɪt/', pos: 'n', meaning_vi: 'hành tinh', example_en: 'Earth is a planet.', example_vi: 'Trái Đất là một hành tinh.' },
            { word: 'ocean', ipa: '/ˈəʊ.ʃən/', pos: 'n', meaning_vi: 'đại dương', example_en: 'The Pacific Ocean is the largest ocean.', example_vi: 'Thái Bình Dương là đại dương lớn nhất.' },
            { word: 'moon', ipa: '/muːn/', pos: 'n', meaning_vi: 'mặt trăng', example_en: 'The moon is bright tonight.', example_vi: 'Mặt trăng đêm nay rất sáng.' },
            { word: 'appliance', ipa: '/əˈplaɪ.əns/', pos: 'n', meaning_vi: 'thiết bị (trong nhà)', example_en: 'We have many modern appliances in our kitchen.', example_vi: 'Chúng tôi có nhiều thiết bị hiện đại trong nhà bếp.' },
            { word: 'robot', ipa: '/ˈrəʊ.bɒt/', pos: 'n', meaning_vi: 'người máy', example_en: 'Robots will do the housework in the future.', example_vi: 'Người máy sẽ làm việc nhà trong tương lai.' },
            { word: 'smart', ipa: '/smɑːt/', pos: 'adj', meaning_vi: 'thông minh', example_en: 'I have a smart TV.', example_vi: 'Tôi có một chiếc TV thông minh.' },
            { word: 'wireless', ipa: '/ˈwaɪə.ləs/', pos: 'adj', meaning_vi: 'không dây', example_en: 'We use a wireless mouse.', example_vi: 'Chúng tôi sử dụng chuột không dây.' },
            { word: 'automatic', ipa: '/ˌɔː.təˈmæt.ɪk/', pos: 'adj', meaning_vi: 'tự động', example_en: 'This washing machine is automatic.', example_vi: 'Chiếc máy giặt này là tự động.' },
            { word: 'solar energy', ipa: '/ˈsəʊ.lər ˈen.ə.dʒi/', pos: 'n', meaning_vi: 'năng lượng mặt trời', example_en: 'Solar energy is clean and renewable.', example_vi: 'Năng lượng mặt trời thì sạch và có thể tái tạo.' },
            { word: 'wind energy', ipa: '/wɪnd ˈen.ə.dʒi/', pos: 'n', meaning_vi: 'năng lượng gió', example_en: 'Wind energy is generated by wind turbines.', example_vi: 'Năng lượng gió được tạo ra bởi các tuabin gió.' },
            { word: 'eco-friendly', ipa: '/ˌiː.kəʊˈfrend.li/', pos: 'adj', meaning_vi: 'thân thiện với môi trường', example_en: 'We should use eco-friendly products.', example_vi: 'Chúng ta nên sử dụng các sản phẩm thân thiện với môi trường.' },
            { word: 'hi-tech', ipa: '/ˌhaɪˈtek/', pos: 'adj', meaning_vi: 'công nghệ cao', example_en: 'He works in a hi-tech company.', example_vi: 'Anh ấy làm việc trong một công ty công nghệ cao.' },
            { word: 'comfortable', ipa: '/ˈkʌm.fə.tə.bəl/', pos: 'adj', meaning_vi: 'thoải mái', example_en: 'This sofa is very comfortable.', example_vi: 'Chiếc ghế sofa này rất thoải mái.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Will & Might for Future',
          order: 2,
          objectives: ['Sử dụng Will cho tương lai', 'Sử dụng Might cho khả năng trong tương lai'],
          type: 'grammar',
          grammar: {
            title: 'Will & Might for Future',
            content: `
### 1. Will (Sẽ)
- **Cách dùng:** Dùng để đưa ra những dự đoán về tương lai (thường dựa trên suy nghĩ, niềm tin cá nhân, không có bằng chứng chắc chắn).
- **Cấu trúc:**
  - Khẳng định: S + will + V (nguyên thể)
    - Ví dụ: People **will live** on the Moon in the future. (Con người sẽ sống trên Mặt Trăng trong tương lai)
  - Phủ định: S + won't (will not) + V (nguyên thể)
    - Ví dụ: We **won't use** fossil fuels anymore. (Chúng ta sẽ không sử dụng nhiên liệu hóa thạch nữa)
  - Nghi vấn: Will + S + V (nguyên thể)?
    - Ví dụ: **Will robots do** all the housework? (Liệu người máy có làm hết việc nhà không?)

### 2. Might (Có thể, có lẽ)
- **Cách dùng:** Dùng để diễn tả một khả năng có thể xảy ra trong tương lai nhưng KHÔNG CHẮC CHẮN (mức độ chắc chắn thấp hơn "will").
- **Cấu trúc:**
  - Khẳng định: S + might + V (nguyên thể)
    - Ví dụ: We **might go** to Mars for our holiday. (Chúng ta có thể sẽ đi nghỉ ở sao Hỏa - nhưng không chắc chắn)
  - Phủ định: S + might not + V (nguyên thể)
    - Ví dụ: It **might not rain** tomorrow. (Ngày mai có thể trời sẽ không mưa)
- **Lưu ý:** Thường không dùng "might" trong câu hỏi, thay vào đó dùng "Do you think... will...?".
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - My Future House',
          order: 3,
          objectives: ['Đọc hiểu về ngôi nhà trong tương lai', 'Tìm thông tin chi tiết'],
          type: 'reading',
          reading: {
            title: 'My Future House',
            passage: 'In the future, I want to live in a smart house on the ocean. It will be a large house with many windows to see the fish and the sea. The house will use solar energy and wind energy, so it will be very eco-friendly. Inside the house, there will be many modern appliances. I will have a smart TV that can talk to me and a wireless robot that can do all the housework. The robot will cook meals, clean the floors, and even wash the clothes. I won\'t have to do anything! It will be a very comfortable and relaxing life.',
            questions: [
              { question: 'Where does the writer want to live in the future?', options: ['On the moon', 'On the ocean', 'In the mountains'], answer: 'On the ocean' },
              { question: 'What kind of energy will the house use?', options: ['Fossil fuels', 'Solar energy and wind energy', 'Nuclear energy'], answer: 'Solar energy and wind energy' },
              { question: 'What will the smart TV be able to do?', options: ['Cook meals', 'Clean the floors', 'Talk to the writer'], answer: 'Talk to the writer' },
              { question: 'What will the wireless robot do?', options: ['All the housework', 'Drive the car', 'Help the writer with homework'], answer: 'All the housework' },
              { question: 'How will the writer\'s life be in the future?', options: ['Busy and stressful', 'Comfortable and relaxing', 'Boring and lonely'], answer: 'Comfortable and relaxing' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit11',
      title: 'Unit 11: Our Greener World',
      order: 11,
      description: 'Từ vựng về môi trường. Ngữ pháp: Câu điều kiện loại 1 (First Conditional).',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Environment',
          order: 1,
          objectives: ['Từ vựng về bảo vệ môi trường', 'Các vấn đề môi trường'],
          type: 'vocabulary',
          words: [
            { word: 'environment', ipa: '/ɪnˈvaɪ.rən.mənt/', pos: 'n', meaning_vi: 'môi trường', example_en: 'We must protect the environment.', example_vi: 'Chúng ta phải bảo vệ môi trường.' },
            { word: 'pollution', ipa: '/pəˈluː.ʃən/', pos: 'n', meaning_vi: 'sự ô nhiễm', example_en: 'Air pollution is a serious problem.', example_vi: 'Ô nhiễm không khí là một vấn đề nghiêm trọng.' },
            { word: 'rubbish', ipa: '/ˈrʌb.ɪʃ/', pos: 'n', meaning_vi: 'rác thải', example_en: 'Don\'t throw rubbish on the street.', example_vi: 'Đừng vứt rác ra đường.' },
            { word: 'recycle', ipa: '/ˌriːˈsaɪ.kəl/', pos: 'v', meaning_vi: 'tái chế', example_en: 'We should recycle paper and plastic.', example_vi: 'Chúng ta nên tái chế giấy và nhựa.' },
            { word: 'reduce', ipa: '/rɪˈdʒuːs/', pos: 'v', meaning_vi: 'giảm bớt', example_en: 'Try to reduce the amount of water you use.', example_vi: 'Hãy cố gắng giảm lượng nước bạn sử dụng.' },
            { word: 'reuse', ipa: '/ˌriːˈjuːz/', pos: 'v', meaning_vi: 'tái sử dụng', example_en: 'You can reuse these plastic bags.', example_vi: 'Bạn có thể tái sử dụng những chiếc túi nilon này.' },
            { word: 'protect', ipa: '/prəˈtekt/', pos: 'v', meaning_vi: 'bảo vệ', example_en: 'We need to protect wild animals.', example_vi: 'Chúng ta cần bảo vệ động vật hoang dã.' },
            { word: 'save', ipa: '/seɪv/', pos: 'v', meaning_vi: 'tiết kiệm, cứu', example_en: 'Save energy by turning off the lights.', example_vi: 'Tiết kiệm năng lượng bằng cách tắt đèn.' },
            { word: 'plant', ipa: '/plɑːnt/', pos: 'v', meaning_vi: 'trồng (cây)', example_en: 'Let\'s plant more trees in the park.', example_vi: 'Hãy trồng thêm cây trong công viên.' },
            { word: 'deforestation', ipa: '/diːˌfɒr.ɪˈsteɪ.ʃən/', pos: 'n', meaning_vi: 'sự phá rừng', example_en: 'Deforestation is destroying the habitats of many animals.', example_vi: 'Sự phá rừng đang phá hủy môi trường sống của nhiều loài động vật.' },
            { word: 'global warming', ipa: '/ˌɡləʊ.bəl ˈwɔː.mɪŋ/', pos: 'n', meaning_vi: 'sự nóng lên toàn cầu', example_en: 'Global warming causes climate change.', example_vi: 'Sự nóng lên toàn cầu gây ra biến đổi khí hậu.' },
            { word: 'reusable', ipa: '/ˌriːˈjuː.zə.bəl/', pos: 'adj', meaning_vi: 'có thể tái sử dụng', example_en: 'Bring a reusable bag when you go shopping.', example_vi: 'Hãy mang theo túi có thể tái sử dụng khi đi mua sắm.' },
            { word: 'plastic', ipa: '/ˈplæs.tɪk/', pos: 'n, adj', meaning_vi: 'nhựa, bằng nhựa', example_en: 'Plastic bottles take a long time to decompose.', example_vi: 'Chai nhựa mất rất nhiều thời gian để phân hủy.' },
            { word: 'glass', ipa: '/ɡlɑːs/', pos: 'n', meaning_vi: 'thủy tinh', example_en: 'Glass can be recycled many times.', example_vi: 'Thủy tinh có thể được tái chế nhiều lần.' },
            { word: 'paper', ipa: '/ˈpeɪ.pər/', pos: 'n', meaning_vi: 'giấy', example_en: 'Write on both sides of the paper.', example_vi: 'Hãy viết trên cả hai mặt giấy.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - First Conditional',
          order: 2,
          objectives: ['Câu điều kiện loại 1'],
          type: 'grammar',
          grammar: {
            title: 'First Conditional (Câu điều kiện loại 1)',
            content: `
### Câu điều kiện loại 1 (First Conditional)
- **Cách dùng:** Dùng để diễn tả một điều kiện có thể xảy ra ở hiện tại hoặc tương lai và kết quả của nó.
- **Cấu trúc:** Câu điều kiện gồm 2 mệnh đề: Mệnh đề If (điều kiện) và Mệnh đề chính (kết quả).
  - **If + S + V (Hiện tại đơn), S + will/won't + V (nguyên thể)**
- **Ví dụ:**
  - **If** we **recycle** more, we **will help** the Earth. (Nếu chúng ta tái chế nhiều hơn, chúng ta sẽ giúp ích cho Trái Đất)
  - **If** it **rains** tomorrow, we **won't go** camping. (Nếu ngày mai trời mưa, chúng tôi sẽ không đi cắm trại)
- **Lưu ý:**
  - Mệnh đề If có thể đứng trước hoặc sau mệnh đề chính. Nếu mệnh đề If đứng trước, phải có dấu phẩy (,) ngăn cách hai mệnh đề.
  - Ví dụ: We **will help** the Earth **if** we **recycle** more. (Không có dấu phẩy)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - A Greener World',
          order: 3,
          objectives: ['Đọc hiểu về bảo vệ môi trường', 'Tìm thông tin chi tiết'],
          type: 'reading',
          reading: {
            title: 'A Greener World',
            passage: 'Our Earth is facing many environmental problems like pollution and global warming. However, we can all help to make it a greener world by following the 3Rs: Reduce, Reuse, and Recycle. First, we should reduce the amount of water and electricity we use. For example, we can turn off the lights when we leave a room. Second, we can reuse things instead of throwing them away. We can use reusable bags when we go shopping and reuse plastic bottles. Finally, we should recycle paper, glass, and plastic. If we all work together, we will have a cleaner and greener environment for the future.',
            questions: [
              { question: 'What environmental problems is our Earth facing?', options: ['Only pollution', 'Only global warming', 'Pollution and global warming'], answer: 'Pollution and global warming' },
              { question: 'What are the 3Rs?', options: ['Reduce, Reuse, and Recycle', 'Read, Write, and Remember', 'Run, Rest, and Relax'], answer: 'Reduce, Reuse, and Recycle' },
              { question: 'How can we reduce electricity?', options: ['By leaving the lights on', 'By turning off the lights when we leave a room', 'By buying more lamps'], answer: 'By turning off the lights when we leave a room' },
              { question: 'What should we do when we go shopping?', options: ['Use plastic bags', 'Use reusable bags', 'Buy more things'], answer: 'Use reusable bags' },
              { question: 'What materials should we recycle?', options: ['Food and water', 'Paper, glass, and plastic', 'Clothes and shoes'], answer: 'Paper, glass, and plastic' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit12',
      title: 'Unit 12: Robots',
      order: 12,
      description: 'Từ vựng về các loại robot và khả năng của chúng. Ngữ pháp: Could/Couldn\'t, Will be able to.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Robots and abilities',
          order: 1,
          objectives: ['Từ vựng về các loại robot', 'Động từ chỉ khả năng'],
          type: 'vocabulary',
          words: [
            { word: 'robot', ipa: '/ˈrəʊ.bɒt/', pos: 'n', meaning_vi: 'người máy', example_en: 'Robots can do many things for us.', example_vi: 'Người máy có thể làm nhiều việc cho chúng ta.' },
            { word: 'home robot', ipa: '/həʊm ˈrəʊ.bɒt/', pos: 'n', meaning_vi: 'người máy gia đình', example_en: 'A home robot can clean the house.', example_vi: 'Một người máy gia đình có thể dọn dẹp nhà cửa.' },
            { word: 'teaching robot', ipa: '/ˈtiː.tʃɪŋ ˈrəʊ.bɒt/', pos: 'n', meaning_vi: 'người máy dạy học', example_en: 'Teaching robots can help children learn.', example_vi: 'Người máy dạy học có thể giúp trẻ em học tập.' },
            { word: 'worker robot', ipa: '/ˈwɜː.kər ˈrəʊ.bɒt/', pos: 'n', meaning_vi: 'người máy công nhân', example_en: 'Worker robots build cars in factories.', example_vi: 'Người máy công nhân lắp ráp ô tô trong nhà máy.' },
            { word: 'doctor robot', ipa: '/ˈdɒk.tər ˈrəʊ.bɒt/', pos: 'n', meaning_vi: 'người máy bác sĩ', example_en: 'Doctor robots can help sick people.', example_vi: 'Người máy bác sĩ có thể giúp người bệnh.' },
            { word: 'space robot', ipa: '/speɪs ˈrəʊ.bɒt/', pos: 'n', meaning_vi: 'người máy không gian', example_en: 'Space robots explore other planets.', example_vi: 'Người máy không gian khám phá các hành tinh khác.' },
            { word: 'understand', ipa: '/ˌʌn.dəˈstænd/', pos: 'v', meaning_vi: 'hiểu', example_en: 'Robots can understand human voices.', example_vi: 'Người máy có thể hiểu giọng nói của con người.' },
            { word: 'recognize', ipa: '/ˈrek.əɡ.naɪz/', pos: 'v', meaning_vi: 'nhận ra', example_en: 'The robot can recognize my face.', example_vi: 'Người máy có thể nhận ra khuôn mặt của tôi.' },
            { word: 'lift', ipa: '/lɪft/', pos: 'v', meaning_vi: 'nâng lên', example_en: 'Worker robots can lift heavy things.', example_vi: 'Người máy công nhân có thể nâng vật nặng.' },
            { word: 'guard', ipa: '/ɡɑːd/', pos: 'v', meaning_vi: 'bảo vệ, canh gác', example_en: 'Guard robots can protect our houses.', example_vi: 'Người máy bảo vệ có thể canh gác nhà của chúng ta.' },
            { word: 'make coffee', ipa: '/meɪk ˈkɒf.i/', pos: 'v', meaning_vi: 'pha cà phê', example_en: 'My home robot can make coffee.', example_vi: 'Người máy gia đình của tôi có thể pha cà phê.' },
            { word: 'do the laundry', ipa: '/duː ðə ˈlɔːn.dri/', pos: 'v', meaning_vi: 'giặt giũ', example_en: 'Robots will do the laundry for us.', example_vi: 'Người máy sẽ giặt giũ cho chúng ta.' },
            { word: 'iron', ipa: '/aɪən/', pos: 'v', meaning_vi: 'ủi (quần áo)', example_en: 'Can the robot iron clothes?', example_vi: 'Người máy có thể ủi quần áo không?' },
            { word: 'repair', ipa: '/rɪˈpeər/', pos: 'v', meaning_vi: 'sửa chữa', example_en: 'Robots can repair broken machines.', example_vi: 'Người máy có thể sửa chữa máy móc bị hỏng.' },
            { word: 'useful', ipa: '/ˈjuːs.fəl/', pos: 'adj', meaning_vi: 'hữu ích', example_en: 'Robots are very useful in our lives.', example_vi: 'Người máy rất hữu ích trong cuộc sống của chúng ta.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Could & Will be able to',
          order: 2,
          objectives: ['Sử dụng Could/Couldn\'t cho khả năng trong quá khứ', 'Sử dụng Will be able to cho khả năng trong tương lai'],
          type: 'grammar',
          grammar: {
            title: 'Could & Will be able to',
            content: `
### 1. Could / Couldn't (Khả năng trong quá khứ)
- **Cách dùng:** Dùng để diễn tả khả năng (có thể/không thể) làm gì đó trong quá khứ. ("Could" là quá khứ của "Can").
- **Cấu trúc:**
  - Khẳng định: S + could + V (nguyên thể)
    - Ví dụ: In the past, robots **could only do** simple things. (Trong quá khứ, người máy chỉ có thể làm những việc đơn giản)
  - Phủ định: S + couldn't (could not) + V (nguyên thể)
    - Ví dụ: Ten years ago, robots **couldn't understand** human voices. (Mười năm trước, người máy không thể hiểu giọng nói con người)
  - Nghi vấn: Could + S + V (nguyên thể)?
    - Ví dụ: **Could robots lift** heavy things in the past? (Trong quá khứ người máy có thể nâng vật nặng không?)

### 2. Will be able to (Khả năng trong tương lai)
- **Cách dùng:** Dùng để diễn tả khả năng (sẽ có thể) làm gì đó trong tương lai.
- **Cấu trúc:**
  - Khẳng định: S + will be able to + V (nguyên thể)
    - Ví dụ: In the future, robots **will be able to talk** to us. (Trong tương lai, người máy sẽ có thể nói chuyện với chúng ta)
  - Phủ định: S + won't (will not) be able to + V (nguyên thể)
    - Ví dụ: Robots **won't be able to think** like humans. (Người máy sẽ không thể suy nghĩ như con người)
  - Nghi vấn: Will + S + be able to + V (nguyên thể)?
    - Ví dụ: **Will robots be able to build** houses? (Liệu người máy sẽ có thể xây nhà không?)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Robots in Our Lives',
          order: 3,
          objectives: ['Đọc hiểu về vai trò của robot', 'Tìm thông tin chi tiết'],
          type: 'reading',
          reading: {
            title: 'Robots in Our Lives',
            passage: 'Robots are becoming more and more common in our lives. They can do many different jobs. In factories, worker robots can lift heavy things and build cars very quickly. In hospitals, doctor robots can help sick people and even perform surgeries. At home, home robots can clean the house, wash clothes, and make coffee. In the future, robots will be even smarter. They will be able to talk to us, understand our feelings, and do almost everything for us. Some people worry that robots will take our jobs, but others believe that robots will make our lives easier and better.',
            questions: [
              { question: 'What can worker robots do in factories?', options: ['Make coffee', 'Lift heavy things and build cars', 'Perform surgeries'], answer: 'Lift heavy things and build cars' },
              { question: 'Where can doctor robots help sick people?', options: ['In factories', 'At home', 'In hospitals'], answer: 'In hospitals' },
              { question: 'What can home robots do?', options: ['Clean the house, wash clothes, and make coffee', 'Build houses', 'Drive cars'], answer: 'Clean the house, wash clothes, and make coffee' },
              { question: 'What will robots be able to do in the future?', options: ['Talk to us and understand our feelings', 'Only do simple things', 'Nothing new'], answer: 'Talk to us and understand our feelings' },
              { question: 'What do some people worry about?', options: ['Robots will be too expensive', 'Robots will take our jobs', 'Robots will be too noisy'], answer: 'Robots will take our jobs' }
            ]
          }
        }
      ]
    }
  ]
};
