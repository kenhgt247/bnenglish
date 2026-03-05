export const grade7Data = {
  grade: {
    id: 'grade7',
    name: 'Tiếng Anh Lớp 7 (Global Success)',
    order: 7
  },
  units: [
    {
      id: 'unit1',
      title: 'Unit 1: Hobbies',
      order: 1,
      description: 'Từ vựng về các sở thích. Ngữ pháp: Thì hiện tại đơn (ôn tập), Động từ chỉ sự yêu thích + V-ing.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Hobbies',
          order: 1,
          objectives: ['Từ vựng về các sở thích phổ biến'],
          type: 'vocabulary',
          words: [
            { word: 'collecting dolls', ipa: '/kəˈlektɪŋ dɒlz/', pos: 'n', meaning_vi: 'sưu tầm búp bê', example_en: 'My sister loves collecting dolls.', example_vi: 'Em gái tôi thích sưu tầm búp bê.' },
            { word: 'making models', ipa: '/ˈmeɪkɪŋ ˈmɒdəlz/', pos: 'n', meaning_vi: 'làm mô hình', example_en: 'He is good at making models of planes.', example_vi: 'Anh ấy giỏi làm mô hình máy bay.' },
            { word: 'gardening', ipa: '/ˈɡɑːdnɪŋ/', pos: 'n', meaning_vi: 'làm vườn', example_en: 'Gardening is a relaxing hobby.', example_vi: 'Làm vườn là một sở thích thư giãn.' },
            { word: 'carving wood', ipa: '/ˈkɑːvɪŋ wʊd/', pos: 'n', meaning_vi: 'chạm khắc gỗ', example_en: 'My grandpa enjoys carving wood.', example_vi: 'Ông tôi thích chạm khắc gỗ.' },
            { word: 'taking photos', ipa: '/ˈteɪkɪŋ ˈfəʊtəʊz/', pos: 'n', meaning_vi: 'chụp ảnh', example_en: 'She takes photos of beautiful flowers.', example_vi: 'Cô ấy chụp ảnh những bông hoa đẹp.' },
            { word: 'skating', ipa: '/ˈskeɪtɪŋ/', pos: 'n', meaning_vi: 'trượt patin/băng', example_en: 'I go skating in the park every weekend.', example_vi: 'Tôi đi trượt patin ở công viên mỗi cuối tuần.' },
            { word: 'bird-watching', ipa: '/bɜːd ˈwɒtʃɪŋ/', pos: 'n', meaning_vi: 'quan sát chim', example_en: 'Bird-watching requires patience.', example_vi: 'Quan sát chim đòi hỏi sự kiên nhẫn.' },
            { word: 'horse-riding', ipa: '/hɔːs ˈraɪdɪŋ/', pos: 'n', meaning_vi: 'cưỡi ngựa', example_en: 'Horse-riding is an expensive hobby.', example_vi: 'Cưỡi ngựa là một sở thích đắt đỏ.' },
            { word: 'unusual', ipa: '/ʌnˈjuːʒuəl/', pos: 'adj', meaning_vi: 'lạ thường, khác thường', example_en: 'Collecting eggshells is an unusual hobby.', example_vi: 'Sưu tầm vỏ trứng là một sở thích lạ thường.' },
            { word: 'creative', ipa: '/kriˈeɪtɪv/', pos: 'adj', meaning_vi: 'sáng tạo', example_en: 'Making pottery is a creative activity.', example_vi: 'Làm đồ gốm là một hoạt động sáng tạo.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Verbs of liking + V-ing',
          order: 2,
          objectives: ['Sử dụng danh động từ sau các động từ chỉ sự yêu thích'],
          type: 'grammar',
          grammar: {
            title: 'Verbs of liking + V-ing',
            content: `
### Động từ chỉ sự yêu thích + V-ing
- **Cách dùng:** Khi muốn nói về việc chúng ta thích hoặc không thích làm gì, chúng ta thường sử dụng danh động từ (V-ing) sau các động từ chỉ cảm xúc.
- **Các động từ phổ biến:**
  - **Like, love, enjoy, fancy, adore:** Thích, yêu thích.
  - **Don't like, dislike, hate, detest:** Không thích, ghét.
- **Cấu trúc:** S + verb (liking) + V-ing
- **Ví dụ:**
  - I **love playing** football. (Tôi yêu việc chơi bóng đá)
  - She **enjoys reading** books. (Cô ấy thích đọc sách)
  - They **hate washing** the dishes. (Họ ghét việc rửa bát)
  - Do you **fancy going** to the cinema? (Bạn có thích đi xem phim không?)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - My Hobby',
          order: 3,
          objectives: ['Đọc hiểu về sở thích cá nhân'],
          type: 'reading',
          reading: {
            title: 'My Hobby',
            passage: 'My name is Elena. My hobby is collecting glass bottles. I started my hobby two years ago after a picnic with my family. We had some empty glass bottles and I thought they were beautiful. Now I have over 50 bottles in my collection. I keep them on a shelf in my bedroom. Some bottles are blue, some are green, and some are clear. I often clean them and arrange them by size. My friends think my hobby is unusual, but I find it very interesting. It doesn\'t cost any money and it helps protect the environment.',
            questions: [
              { question: 'What is Elena\'s hobby?', options: ['Collecting dolls', 'Collecting glass bottles', 'Making models'], answer: 'Collecting glass bottles' },
              { question: 'When did she start her hobby?', options: ['Two years ago', 'Three years ago', 'Last year'], answer: 'Two years ago' },
              { question: 'How many bottles does she have now?', options: ['Over 40', 'Over 50', 'Over 60'], answer: 'Over 50' },
              { question: 'Where does she keep her collection?', options: ['In the kitchen', 'In the living room', 'On a shelf in her bedroom'], answer: 'On a shelf in her bedroom' },
              { question: 'Why does she like her hobby?', options: ['Because it is expensive', 'Because it is interesting and helps the environment', 'Because her friends like it'], answer: 'Because it is interesting and helps the environment' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit2',
      title: 'Unit 2: Healthy Living',
      order: 2,
      description: 'Từ vựng về sức khỏe và lối sống lành mạnh. Ngữ pháp: Câu đơn, Câu ghép.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Health problems',
          order: 1,
          objectives: ['Từ vựng về các vấn đề sức khỏe'],
          type: 'vocabulary',
          words: [
            { word: 'sunburn', ipa: '/ˈsʌnbɜːn/', pos: 'n', meaning_vi: 'cháy nắng', example_en: 'Wear a hat to avoid sunburn.', example_vi: 'Hãy đội mũ để tránh bị cháy nắng.' },
            { word: 'flu', ipa: '/fluː/', pos: 'n', meaning_vi: 'bệnh cúm', example_en: 'He has the flu and needs to rest.', example_vi: 'Anh ấy bị cúm và cần nghỉ ngơi.' },
            { word: 'allergy', ipa: '/ˈælədʒi/', pos: 'n', meaning_vi: 'dị ứng', example_en: 'I have an allergy to seafood.', example_vi: 'Tôi bị dị ứng với hải sản.' },
            { word: 'stomachache', ipa: '/ˈstʌmək-eɪk/', pos: 'n', meaning_vi: 'đau bụng', example_en: 'Eating too much candy can cause a stomachache.', example_vi: 'Ăn quá nhiều kẹo có thể gây đau bụng.' },
            { word: 'sore throat', ipa: '/sɔː θrəʊt/', pos: 'n', meaning_vi: 'đau họng', example_en: 'She has a sore throat and a cough.', example_vi: 'Cô ấy bị đau họng và ho.' },
            { word: 'temperature', ipa: '/ˈtemprətʃə(r)/', pos: 'n', meaning_vi: 'nhiệt độ, sốt', example_en: 'The child has a high temperature.', example_vi: 'Đứa trẻ đang bị sốt cao.' },
            { word: 'active', ipa: '/ˈæktɪv/', pos: 'adj', meaning_vi: 'năng động', example_en: 'Try to be more active to stay healthy.', example_vi: 'Hãy cố gắng năng động hơn để giữ sức khỏe.' },
            { word: 'fit', ipa: '/fɪt/', pos: 'adj', meaning_vi: 'khỏe mạnh, vừa vặn', example_en: 'I go jogging to keep fit.', example_vi: 'Tôi đi bộ nhanh để giữ dáng.' },
            { word: 'healthy', ipa: '/ˈhelθi/', pos: 'adj', meaning_vi: 'lành mạnh', example_en: 'Eat more vegetables for a healthy diet.', example_vi: 'Ăn nhiều rau hơn để có chế độ ăn lành mạnh.' },
            { word: 'avoid', ipa: '/əˈvɔɪd/', pos: 'v', meaning_vi: 'tránh', example_en: 'Avoid drinking too much soda.', example_vi: 'Tránh uống quá nhiều nước ngọt.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Simple and Compound Sentences',
          order: 2,
          objectives: ['Phân biệt câu đơn và câu ghép'],
          type: 'grammar',
          grammar: {
            title: 'Simple and Compound Sentences',
            content: `
### 1. Câu đơn (Simple Sentences)
- **Định nghĩa:** Là câu chỉ chứa một mệnh đề độc lập (có một chủ ngữ và một động từ).
- **Ví dụ:** I eat apples. / We are playing football.

### 2. Câu ghép (Compound Sentences)
- **Định nghĩa:** Là câu được tạo thành từ hai hoặc nhiều mệnh đề độc lập nối với nhau bằng các liên từ (FANBOYS: for, and, nor, but, or, yet, so).
- **Cách nối:** Mệnh đề 1, + liên từ + Mệnh đề 2.
- **Ví dụ:**
  - I like apples, **and** I like bananas.
  - He is tired, **but** he continues working.
  - You can go by bus, **or** you can walk.
  - It was raining, **so** we stayed at home.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Tips for a Healthy Life',
          order: 3,
          objectives: ['Đọc hiểu về lời khuyên sức khỏe'],
          type: 'reading',
          reading: {
            title: 'Tips for a Healthy Life',
            passage: 'To have a healthy life, you should follow some simple tips. First, eat a balanced diet with plenty of fruits and vegetables. Avoid eating too much fast food and sugary drinks. Second, do exercise regularly. You can go jogging, swimming, or play sports with your friends. Third, get enough sleep. Most people need about 8 hours of sleep every night. Finally, keep your body clean. Wash your hands often and brush your teeth twice a day. If you follow these tips, you will feel more energetic and stay away from illnesses.',
            questions: [
              { question: 'What should you eat for a balanced diet?', options: ['Fast food', 'Fruits and vegetables', 'Candy'], answer: 'Fruits and vegetables' },
              { question: 'What should you avoid drinking?', options: ['Water', 'Milk', 'Sugary drinks'], answer: 'Sugary drinks' },
              { question: 'How much sleep do most people need?', options: ['6 hours', '8 hours', '10 hours'], answer: '8 hours' },
              { question: 'How often should you brush your teeth?', options: ['Once a day', 'Twice a day', 'Three times a day'], answer: 'Twice a day' },
              { question: 'What is the benefit of following these tips?', options: ['You will feel tired', 'You will feel more energetic', 'You will get sick'], answer: 'You will feel more energetic' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit3',
      title: 'Unit 3: Community Service',
      order: 3,
      description: 'Từ vựng về các hoạt động phục vụ cộng đồng. Ngữ pháp: Thì quá khứ đơn.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Community activities',
          order: 1,
          objectives: ['Từ vựng về các hoạt động tình nguyện'],
          type: 'vocabulary',
          words: [
            { word: 'volunteer', ipa: '/ˌvɒlənˈtɪə(r)/', pos: 'n/v', meaning_vi: 'tình nguyện viên/tình nguyện', example_en: 'I want to be a volunteer for the local library.', example_vi: 'Tôi muốn trở thành tình nguyện viên cho thư viện địa phương.' },
            { word: 'community service', ipa: '/kəˈmjuːnəti ˈsɜːvɪs/', pos: 'n', meaning_vi: 'dịch vụ cộng đồng', example_en: 'They are doing community service this weekend.', example_vi: 'Họ đang làm dịch vụ cộng đồng vào cuối tuần này.' },
            { word: 'donate', ipa: '/dəʊˈneɪt/', pos: 'v', meaning_vi: 'quyên góp', example_en: 'We donate old clothes to poor children.', example_vi: 'Chúng tôi quyên góp quần áo cũ cho trẻ em nghèo.' },
            { word: 'homeless people', ipa: '/ˈhəʊmləs ˈpiːpl/', pos: 'n', meaning_vi: 'người vô gia cư', example_en: 'The organization helps homeless people find shelter.', example_vi: 'Tổ chức giúp người vô gia cư tìm nơi ở.' },
            { word: 'elderly people', ipa: '/ˈeldəli ˈpiːpl/', pos: 'n', meaning_vi: 'người già', example_en: 'We should visit and help elderly people.', example_vi: 'Chúng ta nên thăm và giúp đỡ người già.' },
            { word: 'nursing home', ipa: '/ˈnɜːsɪŋ həʊm/', pos: 'n', meaning_vi: 'viện dưỡng lão', example_en: 'She works as a volunteer in a nursing home.', example_vi: 'Cô ấy làm tình nguyện viên trong một viện dưỡng lão.' },
            { word: 'plant trees', ipa: '/plɑːnt triːz/', pos: 'v', meaning_vi: 'trồng cây', example_en: 'They plan to plant trees in the park.', example_vi: 'Họ có kế hoạch trồng cây trong công viên.' },
            { word: 'clean up', ipa: '/kliːn ʌp/', pos: 'v', meaning_vi: 'dọn dẹp', example_en: 'We cleaned up the beach last Sunday.', example_vi: 'Chúng tôi đã dọn dẹp bãi biển vào Chủ nhật tuần trước.' },
            { word: 'tutor', ipa: '/ˈtjuːtə(r)/', pos: 'v/n', meaning_vi: 'dạy kèm/gia sư', example_en: 'He tutors street children in math.', example_vi: 'Anh ấy dạy kèm toán cho trẻ em đường phố.' },
            { word: 'benefit', ipa: '/ˈbenɪfɪt/', pos: 'n/v', meaning_vi: 'lợi ích/mang lại lợi ích', example_en: 'Volunteering brings many benefits to the community.', example_vi: 'Hoạt động tình nguyện mang lại nhiều lợi ích cho cộng đồng.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Past Simple',
          order: 2,
          objectives: ['Sử dụng thì quá khứ đơn để diễn tả hành động đã xảy ra và kết thúc trong quá khứ'],
          type: 'grammar',
          grammar: {
            title: 'The Past Simple Tense',
            content: `
### Thì Quá Khứ Đơn (Past Simple)
- **Cách dùng:** Diễn tả một hành động đã xảy ra và kết thúc tại một thời điểm xác định trong quá khứ.
- **Cấu trúc:**
  - **Khẳng định:** S + V-ed / V2
  - **Phủ định:** S + did not (didn't) + V (nguyên thể)
  - **Nghi vấn:** Did + S + V (nguyên thể)?
- **Dấu hiệu nhận biết:** yesterday, last (week, month, year), ago, in + năm trong quá khứ.
- **Ví dụ:**
  - I **visited** my grandparents last weekend. (Tôi đã thăm ông bà vào cuối tuần trước)
  - She **didn't go** to school yesterday. (Hôm qua cô ấy không đi học)
  - **Did** you **watch** TV last night? (Tối qua bạn có xem TV không?)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Volunteer Work',
          order: 3,
          objectives: ['Đọc hiểu về công việc tình nguyện'],
          type: 'reading',
          reading: {
            title: 'Volunteer Work',
            passage: 'Last summer, our school organized a volunteer program. We went to a small village in the mountains to help the local people. We did many useful things. Some students planted trees along the roads. Others helped the farmers harvest their crops. I joined the group that tutored the children. We taught them math and English. In the evenings, we played games and sang songs together. It was hard work, but we felt very happy. The trip taught us how to share and care for others.',
            questions: [
              { question: 'Where did the students go for their volunteer program?', options: ['To a big city', 'To a small village in the mountains', 'To a beach'], answer: 'To a small village in the mountains' },
              { question: 'What did some students plant?', options: ['Flowers', 'Vegetables', 'Trees'], answer: 'Trees' },
              { question: 'What did the writer do?', options: ['Planted trees', 'Harvested crops', 'Tutored the children'], answer: 'Tutored the children' },
              { question: 'What did they do in the evenings?', options: ['Watched TV', 'Played games and sang songs', 'Went to sleep early'], answer: 'Played games and sang songs' },
              { question: 'How did they feel about the trip?', options: ['They felt bored', 'They felt very happy', 'They felt angry'], answer: 'They felt very happy' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit4',
      title: 'Unit 4: Music and Arts',
      order: 4,
      description: 'Từ vựng về âm nhạc và nghệ thuật. Ngữ pháp: So sánh bằng (as...as), So sánh không bằng (not as...as), (not) the same as, different from.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Music and Arts',
          order: 1,
          objectives: ['Từ vựng về các loại hình nghệ thuật và nhạc cụ'],
          type: 'vocabulary',
          words: [
            { word: 'musician', ipa: '/mjuˈzɪʃn/', pos: 'n', meaning_vi: 'nhạc sĩ', example_en: 'He is a talented musician.', example_vi: 'Anh ấy là một nhạc sĩ tài năng.' },
            { word: 'composer', ipa: '/kəmˈpəʊzə(r)/', pos: 'n', meaning_vi: 'nhà soạn nhạc', example_en: 'Trinh Cong Son is a famous composer.', example_vi: 'Trịnh Công Sơn là một nhà soạn nhạc nổi tiếng.' },
            { word: 'painting', ipa: '/ˈpeɪntɪŋ/', pos: 'n', meaning_vi: 'bức họa, tranh vẽ', example_en: 'The painting is displayed in the gallery.', example_vi: 'Bức tranh được trưng bày trong phòng triển lãm.' },
            { word: 'sculpture', ipa: '/ˈskʌlptʃə(r)/', pos: 'n', meaning_vi: 'tác phẩm điêu khắc', example_en: 'They are looking at a modern sculpture.', example_vi: 'Họ đang nhìn một tác phẩm điêu khắc hiện đại.' },
            { word: 'exhibition', ipa: '/ˌeksɪˈbɪʃn/', pos: 'n', meaning_vi: 'cuộc triển lãm', example_en: 'We went to an art exhibition yesterday.', example_vi: 'Chúng tôi đã đi xem một cuộc triển lãm nghệ thuật ngày hôm qua.' },
            { word: 'performance', ipa: '/pəˈfɔːməns/', pos: 'n', meaning_vi: 'buổi biểu diễn', example_en: 'The musical performance was amazing.', example_vi: 'Buổi biểu diễn âm nhạc thật tuyệt vời.' },
            { word: 'puppet', ipa: '/ˈpʌpɪt/', pos: 'n', meaning_vi: 'con rối', example_en: 'Water puppetry is a traditional art form.', example_vi: 'Múa rối nước là một loại hình nghệ thuật truyền thống.' },
            { word: 'instrument', ipa: '/ˈɪnstrəmənt/', pos: 'n', meaning_vi: 'nhạc cụ', example_en: 'Can you play any musical instrument?', example_vi: 'Bạn có biết chơi nhạc cụ nào không?' },
            { word: 'atmosphere', ipa: '/ˈætməsfɪə(r)/', pos: 'n', meaning_vi: 'bầu không khí', example_en: 'The concert had a great atmosphere.', example_vi: 'Buổi hòa nhạc có một bầu không khí tuyệt vời.' },
            { word: 'artistic', ipa: '/ɑːˈtɪstɪk/', pos: 'adj', meaning_vi: 'thuộc về nghệ thuật', example_en: 'She has an artistic talent.', example_vi: 'Cô ấy có tài năng nghệ thuật.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Comparisons',
          order: 2,
          objectives: ['Sử dụng cấu trúc so sánh bằng, không bằng, giống và khác nhau'],
          type: 'grammar',
          grammar: {
            title: 'Comparisons',
            content: `
### So sánh (Comparisons)
- **So sánh bằng (as ... as):** S1 + V + as + adj/adv + as + S2
  - Ví dụ: Classical music is **as interesting as** pop music.
- **So sánh không bằng (not as ... as):** S1 + V + not as + adj/adv + as + S2
  - Ví dụ: This painting is **not as expensive as** that one.
- **Giống nhau (the same as):** S1 + V + the same (noun) as + S2
  - Ví dụ: My taste in music is **the same as** yours.
- **Khác nhau (different from):** S1 + V + different from + S2
  - Ví dụ: Life in the city is **different from** life in the country.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Water Puppetry',
          order: 3,
          objectives: ['Đọc hiểu về múa rối nước'],
          type: 'reading',
          reading: {
            title: 'Water Puppetry',
            passage: 'Water puppetry is a unique traditional art form in Vietnam. It began in the 11th century in the villages of the Red River Delta. The puppets are made of wood and painted with bright colors. The shows take place in a pool of water. The puppeteers stand behind a screen and control the puppets using long bamboo rods and strings hidden under the water. The performances usually tell stories about daily life in the countryside, such as farming, fishing, and traditional festivals. There is also traditional music to accompany the show.',
            questions: [
              { question: 'Where did water puppetry begin?', options: ['In the Mekong Delta', 'In the Red River Delta', 'In the mountains'], answer: 'In the Red River Delta' },
              { question: 'When did it begin?', options: ['In the 10th century', 'In the 11th century', 'In the 12th century'], answer: 'In the 11th century' },
              { question: 'What are the puppets made of?', options: ['Plastic', 'Paper', 'Wood'], answer: 'Wood' },
              { question: 'Where do the shows take place?', options: ['On a stage', 'In a pool of water', 'In a park'], answer: 'In a pool of water' },
              { question: 'What do the performances usually tell stories about?', options: ['Kings and queens', 'Modern city life', 'Daily life in the countryside'], answer: 'Daily life in the countryside' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit5',
      title: 'Unit 5: Food and Drink',
      order: 5,
      description: 'Từ vựng về đồ ăn và thức uống. Ngữ pháp: Danh từ đếm được và không đếm được, How much/How many.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Food and Drink',
          order: 1,
          objectives: ['Từ vựng về các món ăn và đồ uống phổ biến'],
          type: 'vocabulary',
          words: [
            { word: 'ingredients', ipa: '/ɪnˈɡriːdiənts/', pos: 'n', meaning_vi: 'nguyên liệu', example_en: 'What are the ingredients for this cake?', example_vi: 'Các nguyên liệu cho chiếc bánh này là gì?' },
            { word: 'recipe', ipa: '/ˈresəpi/', pos: 'n', meaning_vi: 'công thức nấu ăn', example_en: 'I followed the recipe to make soup.', example_vi: 'Tôi đã làm theo công thức để nấu súp.' },
            { word: 'omelette', ipa: '/ˈɒmlət/', pos: 'n', meaning_vi: 'trứng cuộn', example_en: 'I usually have an omelette for breakfast.', example_vi: 'Tôi thường ăn trứng cuộn vào bữa sáng.' },
            { word: 'turmeric', ipa: '/ˈtɜːmərɪk/', pos: 'n', meaning_vi: 'nghệ', example_en: 'Turmeric is used to give color to food.', example_vi: 'Nghệ được dùng để tạo màu cho thức ăn.' },
            { word: 'shrimp', ipa: '/ʃrɪmp/', pos: 'n', meaning_vi: 'tôm', example_en: 'I like eating grilled shrimp.', example_vi: 'Tôi thích ăn tôm nướng.' },
            { word: 'flour', ipa: '/ˈflaʊə(r)/', pos: 'n', meaning_vi: 'bột mì', example_en: 'Mix the flour with water.', example_vi: 'Trộn bột mì với nước.' },
            { word: 'sauce', ipa: '/sɔːs/', pos: 'n', meaning_vi: 'nước xốt', example_en: 'This fish sauce is very salty.', example_vi: 'Nước mắm này rất mặn.' },
            { word: 'delicious', ipa: '/dɪˈlɪʃəs/', pos: 'adj', meaning_vi: 'ngon miệng', example_en: 'The food at this restaurant is delicious.', example_vi: 'Đồ ăn ở nhà hàng này rất ngon.' },
            { word: 'fragrant', ipa: '/ˈfreɪɡrənt/', pos: 'adj', meaning_vi: 'thơm', example_en: 'The flowers are very fragrant.', example_vi: 'Những bông hoa rất thơm.' },
            { word: 'bitter', ipa: '/ˈbɪtə(r)/', pos: 'adj', meaning_vi: 'đắng', example_en: 'This coffee is too bitter for me.', example_vi: 'Cà phê này quá đắng đối với tôi.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Countable and Uncountable Nouns',
          order: 2,
          objectives: ['Phân biệt danh từ đếm được, không đếm được và sử dụng How much/How many'],
          type: 'grammar',
          grammar: {
            title: 'Countable and Uncountable Nouns',
            content: `
### Danh từ đếm được và không đếm được
- **Danh từ đếm được (Countable nouns):** Là những danh từ có thể đếm được bằng số đếm (một, hai, ba...). Có dạng số ít và số nhiều.
  - Ví dụ: an apple, two apples, a book, three books.
- **Danh từ không đếm được (Uncountable nouns):** Là những danh từ không thể đếm được trực tiếp bằng số đếm. Chỉ có dạng số ít.
  - Ví dụ: water, milk, rice, sugar, money.

### How much / How many
- **How many:** Dùng để hỏi số lượng cho danh từ đếm được số nhiều.
  - Cấu trúc: How many + plural countable noun + are there / do you need...?
  - Ví dụ: **How many apples** do you want?
- **How much:** Dùng để hỏi số lượng cho danh từ không đếm được.
  - Cấu trúc: How much + uncountable noun + is there / do you need...?
  - Ví dụ: **How much milk** is there in the fridge?
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Pho',
          order: 3,
          objectives: ['Đọc hiểu về món Phở'],
          type: 'reading',
          reading: {
            title: 'Pho - A Popular Vietnamese Dish',
            passage: 'Pho is one of the most popular traditional dishes in Vietnam. It is a type of noodle soup. You can eat Pho for breakfast, lunch, or dinner. The main ingredients of Pho are rice noodles and broth. The broth is usually made by boiling beef bones for a long time. There are two main types of Pho: Pho Bo (beef noodle soup) and Pho Ga (chicken noodle soup). People often eat Pho with some herbs, lime juice, and chili. It is very delicious and nutritious.',
            questions: [
              { question: 'What type of dish is Pho?', options: ['A salad', 'A noodle soup', 'A dessert'], answer: 'A noodle soup' },
              { question: 'When can you eat Pho?', options: ['Only for breakfast', 'Only for dinner', 'For breakfast, lunch, or dinner'], answer: 'For breakfast, lunch, or dinner' },
              { question: 'What are the main ingredients of Pho?', options: ['Rice noodles and broth', 'Bread and meat', 'Rice and fish'], answer: 'Rice noodles and broth' },
              { question: 'What is the broth usually made from?', options: ['Chicken bones', 'Beef bones', 'Pork bones'], answer: 'Beef bones' },
              { question: 'What do people often eat Pho with?', options: ['Herbs, lime juice, and chili', 'Milk and sugar', 'Butter and cheese'], answer: 'Herbs, lime juice, and chili' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit6',
      title: 'Unit 6: A Visit to a School',
      order: 6,
      description: 'Từ vựng về trường học và các hoạt động ở trường. Ngữ pháp: Giới từ chỉ thời gian và nơi chốn.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - School facilities',
          order: 1,
          objectives: ['Từ vựng về cơ sở vật chất trường học'],
          type: 'vocabulary',
          words: [
            { word: 'laboratory', ipa: '/ləˈbɒrətri/', pos: 'n', meaning_vi: 'phòng thí nghiệm', example_en: 'We do experiments in the science laboratory.', example_vi: 'Chúng tôi làm thí nghiệm trong phòng thí nghiệm khoa học.' },
            { word: 'library', ipa: '/ˈlaɪbrəri/', pos: 'n', meaning_vi: 'thư viện', example_en: 'Students can borrow books from the library.', example_vi: 'Học sinh có thể mượn sách từ thư viện.' },
            { word: 'gymnasium', ipa: '/dʒɪmˈneɪziəm/', pos: 'n', meaning_vi: 'phòng tập thể dục', example_en: 'We have PE lessons in the gymnasium.', example_vi: 'Chúng tôi có các tiết thể dục trong phòng tập.' },
            { word: 'canteen', ipa: '/kænˈtiːn/', pos: 'n', meaning_vi: 'nhà ăn, căng tin', example_en: 'I often have lunch at the school canteen.', example_vi: 'Tôi thường ăn trưa tại căng tin trường.' },
            { word: 'playground', ipa: '/ˈpleɪɡraʊnd/', pos: 'n', meaning_vi: 'sân chơi', example_en: 'The children are playing in the playground.', example_vi: 'Trẻ em đang chơi ở sân chơi.' },
            { word: 'computer room', ipa: '/kəmˈpjuːtə(r) ruːm/', pos: 'n', meaning_vi: 'phòng máy tính', example_en: 'We learn how to use computers in the computer room.', example_vi: 'Chúng tôi học cách sử dụng máy tính trong phòng máy tính.' },
            { word: 'facility', ipa: '/fəˈsɪləti/', pos: 'n', meaning_vi: 'cơ sở vật chất', example_en: 'Our school has great facilities.', example_vi: 'Trường chúng tôi có cơ sở vật chất tuyệt vời.' },
            { word: 'equipment', ipa: '/ɪˈkwɪpmənt/', pos: 'n', meaning_vi: 'thiết bị', example_en: 'The lab is equipped with modern equipment.', example_vi: 'Phòng thí nghiệm được trang bị thiết bị hiện đại.' },
            { word: 'outdoor', ipa: '/ˈaʊtdɔː(r)/', pos: 'adj', meaning_vi: 'ngoài trời', example_en: 'I like outdoor activities.', example_vi: 'Tôi thích các hoạt động ngoài trời.' },
            { word: 'talented', ipa: '/ˈtæləntɪd/', pos: 'adj', meaning_vi: 'có tài năng', example_en: 'He is a talented student.', example_vi: 'Cậu ấy là một học sinh tài năng.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Prepositions of time and place',
          order: 2,
          objectives: ['Sử dụng đúng các giới từ chỉ thời gian và nơi chốn'],
          type: 'grammar',
          grammar: {
            title: 'Prepositions of time and place',
            content: `
### Giới từ chỉ thời gian (Prepositions of time)
- **At:** Dùng cho giờ cụ thể, các dịp lễ. (at 7 o'clock, at Tet, at noon)
- **On:** Dùng cho ngày trong tuần, ngày tháng năm. (on Monday, on May 1st)
- **In:** Dùng cho tháng, năm, mùa, buổi trong ngày. (in 2023, in summer, in the morning)

### Giới từ chỉ nơi chốn (Prepositions of place)
- **At:** Dùng cho một điểm cụ thể. (at home, at school, at the bus stop)
- **On:** Dùng cho bề mặt, tên đường. (on the table, on the wall, on Tran Phu street)
- **In:** Dùng cho không gian kín, thành phố, quốc gia. (in the room, in Hanoi, in Vietnam)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Chu Van An High School',
          order: 3,
          objectives: ['Đọc hiểu về một ngôi trường nổi tiếng'],
          type: 'reading',
          reading: {
            title: 'Chu Van An High School',
            passage: 'Chu Van An High School is one of the oldest and most famous schools in Hanoi. It was established in 1908 by the French. The school is located near West Lake, so it has a very beautiful and peaceful view. The school has excellent facilities, including modern classrooms, a large library, well-equipped laboratories, and a big stadium. Many talented students have studied here. To become a student at Chu Van An High School, you have to pass a very difficult entrance exam. The students are not only good at studying but also active in many extracurricular activities.',
            questions: [
              { question: 'When was Chu Van An High School established?', options: ['In 1900', 'In 1908', 'In 1980'], answer: 'In 1908' },
              { question: 'Where is the school located?', options: ['Near Hoan Kiem Lake', 'Near West Lake', 'Near the Red River'], answer: 'Near West Lake' },
              { question: 'What facilities does the school have?', options: ['Only classrooms', 'A library and a stadium', 'Modern classrooms, a large library, laboratories, and a stadium'], answer: 'Modern classrooms, a large library, laboratories, and a stadium' },
              { question: 'How can you become a student there?', options: ['By paying a lot of money', 'By passing a difficult entrance exam', 'By living near the school'], answer: 'By passing a difficult entrance exam' },
              { question: 'What are the students like?', options: ['They only study', 'They are good at studying and active in activities', 'They are lazy'], answer: 'They are good at studying and active in activities' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit7',
      title: 'Unit 7: Traffic',
      order: 7,
      description: 'Từ vựng về giao thông. Ngữ pháp: It chỉ khoảng cách, Used to.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Traffic',
          order: 1,
          objectives: ['Từ vựng về phương tiện và luật giao thông'],
          type: 'vocabulary',
          words: [
            { word: 'traffic jam', ipa: '/ˈtræfɪk dʒæm/', pos: 'n', meaning_vi: 'tắc đường', example_en: 'I was late because of a traffic jam.', example_vi: 'Tôi bị muộn vì tắc đường.' },
            { word: 'road signs', ipa: '/rəʊd saɪnz/', pos: 'n', meaning_vi: 'biển báo giao thông', example_en: 'You should obey the road signs.', example_vi: 'Bạn nên tuân thủ các biển báo giao thông.' },
            { word: 'helmet', ipa: '/ˈhelmɪt/', pos: 'n', meaning_vi: 'mũ bảo hiểm', example_en: 'Always wear a helmet when riding a bike.', example_vi: 'Luôn đội mũ bảo hiểm khi đi xe đạp.' },
            { word: 'pedestrian', ipa: '/pəˈdestriən/', pos: 'n', meaning_vi: 'người đi bộ', example_en: 'Drivers must stop for pedestrians.', example_vi: 'Tài xế phải dừng lại cho người đi bộ.' },
            { word: 'zebra crossing', ipa: '/ˌzebrə ˈkrɒsɪŋ/', pos: 'n', meaning_vi: 'vạch kẻ đường cho người đi bộ', example_en: 'Cross the street at the zebra crossing.', example_vi: 'Băng qua đường ở vạch kẻ đường.' },
            { word: 'seatbelt', ipa: '/ˈsiːtbelt/', pos: 'n', meaning_vi: 'dây an toàn', example_en: 'Fasten your seatbelt before driving.', example_vi: 'Thắt dây an toàn trước khi lái xe.' },
            { word: 'pavement', ipa: '/ˈpeɪvmənt/', pos: 'n', meaning_vi: 'vỉa hè', example_en: 'Don\'t ride your bike on the pavement.', example_vi: 'Đừng đi xe đạp trên vỉa hè.' },
            { word: 'illegal', ipa: '/ɪˈliːɡl/', pos: 'adj', meaning_vi: 'bất hợp pháp', example_en: 'It is illegal to drive without a license.', example_vi: 'Lái xe không có bằng là bất hợp pháp.' },
            { word: 'obey', ipa: '/əˈbeɪ/', pos: 'v', meaning_vi: 'tuân thủ', example_en: 'We must obey traffic rules.', example_vi: 'Chúng ta phải tuân thủ luật giao thông.' },
            { word: 'reverse', ipa: '/rɪˈvɜːs/', pos: 'v', meaning_vi: 'lùi xe', example_en: 'He reversed the car into the garage.', example_vi: 'Anh ấy lùi xe vào ga-ra.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - "It" for distance and "Used to"',
          order: 2,
          objectives: ['Sử dụng "It" để chỉ khoảng cách và cấu trúc "Used to"'],
          type: 'grammar',
          grammar: {
            title: '"It" indicating distance and "Used to"',
            content: `
### "It" chỉ khoảng cách (It indicating distance)
- Chúng ta dùng **It** làm chủ ngữ để nói về khoảng cách.
- **Cấu trúc:** It is (about) + khoảng cách + from + địa điểm A + to + địa điểm B.
- **Ví dụ:** It is about 5 kilometers from my house to my school. (Khoảng 5 km từ nhà tôi đến trường.)

### Cấu trúc "Used to"
- Dùng để diễn tả một thói quen, một hành động thường xuyên xảy ra trong quá khứ nhưng hiện tại không còn nữa.
- **Khẳng định:** S + used to + V(nguyên thể)
  - Ví dụ: I used to ride a bike to school. (Tôi từng đạp xe đến trường.)
- **Phủ định:** S + did not (didn't) + use to + V(nguyên thể)
  - Ví dụ: She didn't use to like coffee. (Cô ấy từng không thích cà phê.)
- **Nghi vấn:** Did + S + use to + V(nguyên thể)?
  - Ví dụ: Did you use to play marbles? (Bạn có từng chơi bắn bi không?)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Traffic rules in the UK',
          order: 3,
          objectives: ['Đọc hiểu về luật giao thông ở Vương quốc Anh'],
          type: 'reading',
          reading: {
            title: 'Traffic Rules in the UK',
            passage: 'If you visit the UK, you must remember some important traffic rules. The most important rule is that people drive on the left side of the road. This is different from many other countries. When you cross the street, you must look to the right first, then left, and right again. You must wear a seatbelt when you are in a car, whether you are the driver or a passenger. If you ride a motorbike, you must wear a helmet. Pedestrians should use zebra crossings to cross the street safely. Always obey the traffic lights and road signs.',
            questions: [
              { question: 'Which side of the road do people drive on in the UK?', options: ['The right side', 'The left side', 'In the middle'], answer: 'The left side' },
              { question: 'Which direction should you look first when crossing the street in the UK?', options: ['Left', 'Right', 'Straight ahead'], answer: 'Right' },
              { question: 'Who must wear a seatbelt in a car?', options: ['Only the driver', 'Only the passengers', 'Both the driver and passengers'], answer: 'Both the driver and passengers' },
              { question: 'What must you wear if you ride a motorbike?', options: ['A hat', 'A helmet', 'A seatbelt'], answer: 'A helmet' },
              { question: 'Where should pedestrians cross the street?', options: ['Anywhere', 'At traffic lights only', 'At zebra crossings'], answer: 'At zebra crossings' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit8',
      title: 'Unit 8: Films',
      order: 8,
      description: 'Từ vựng về các loại phim. Ngữ pháp: Tính từ đuôi -ed và -ing, Although/Though và However/Nevertheless.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Types of films',
          order: 1,
          objectives: ['Từ vựng về các thể loại phim và tính từ miêu tả'],
          type: 'vocabulary',
          words: [
            { word: 'documentary', ipa: '/ˌdɒkjuˈmentri/', pos: 'n', meaning_vi: 'phim tài liệu', example_en: 'I watched a documentary about nature.', example_vi: 'Tôi đã xem một bộ phim tài liệu về thiên nhiên.' },
            { word: 'comedy', ipa: '/ˈkɒmədi/', pos: 'n', meaning_vi: 'phim hài', example_en: 'We laughed a lot during the comedy.', example_vi: 'Chúng tôi đã cười rất nhiều khi xem phim hài.' },
            { word: 'horror film', ipa: '/ˈhɒrə(r) fɪlm/', pos: 'n', meaning_vi: 'phim kinh dị', example_en: 'I am too scared to watch horror films.', example_vi: 'Tôi quá sợ để xem phim kinh dị.' },
            { word: 'science fiction', ipa: '/ˌsaɪəns ˈfɪkʃn/', pos: 'n', meaning_vi: 'phim khoa học viễn tưởng', example_en: 'Star Wars is a famous science fiction film.', example_vi: 'Star Wars là một bộ phim khoa học viễn tưởng nổi tiếng.' },
            { word: 'animation', ipa: '/ˌænɪˈmeɪʃn/', pos: 'n', meaning_vi: 'phim hoạt hình', example_en: 'Children love watching animations.', example_vi: 'Trẻ em thích xem phim hoạt hình.' },
            { word: 'thriller', ipa: '/ˈθrɪlə(r)/', pos: 'n', meaning_vi: 'phim giật gân', example_en: 'The movie was a gripping thriller.', example_vi: 'Bộ phim là một tác phẩm giật gân hấp dẫn.' },
            { word: 'gripping', ipa: '/ˈɡrɪpɪŋ/', pos: 'adj', meaning_vi: 'hấp dẫn, thú vị', example_en: 'The plot of the movie was gripping.', example_vi: 'Cốt truyện của bộ phim thật hấp dẫn.' },
            { word: 'hilarious', ipa: '/hɪˈleəriəs/', pos: 'adj', meaning_vi: 'vui nhộn, nực cười', example_en: 'The comedian told a hilarious story.', example_vi: 'Diễn viên hài đã kể một câu chuyện vui nhộn.' },
            { word: 'scary', ipa: '/ˈskeəri/', pos: 'adj', meaning_vi: 'đáng sợ', example_en: 'The ghost story was very scary.', example_vi: 'Câu chuyện ma thật đáng sợ.' },
            { word: 'boring', ipa: '/ˈbɔːrɪŋ/', pos: 'adj', meaning_vi: 'nhàm chán', example_en: 'The film was so boring that I fell asleep.', example_vi: 'Bộ phim nhàm chán đến mức tôi đã ngủ quên.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Adjectives ending in -ed/-ing and Connectors',
          order: 2,
          objectives: ['Phân biệt tính từ đuôi -ed/-ing và sử dụng Although/Though, However/Nevertheless'],
          type: 'grammar',
          grammar: {
            title: '-ed/-ing Adjectives and Connectors',
            content: `
### Tính từ đuôi -ed và -ing
- **Tính từ đuôi -ed:** Dùng để miêu tả cảm xúc, cảm nhận của con người về một sự vật, sự việc.
  - Ví dụ: I am **bored** with this film. (Tôi cảm thấy chán bộ phim này.)
- **Tính từ đuôi -ing:** Dùng để miêu tả tính chất, đặc điểm của sự vật, sự việc, con người gây ra cảm xúc đó.
  - Ví dụ: This film is **boring**. (Bộ phim này thật nhàm chán.)

### Although / Though (Mặc dù)
- Dùng để nối hai mệnh đề thể hiện sự nhượng bộ, tương phản.
- **Cấu trúc:** Although / Though + S + V, S + V.
- Ví dụ: **Although** the film was long, I enjoyed it. (Mặc dù bộ phim dài, tôi vẫn thích nó.)

### However / Nevertheless (Tuy nhiên)
- Dùng để thể hiện sự tương phản giữa hai câu. Thường đứng đầu câu thứ hai, sau dấu chấm hoặc dấu chấm phẩy, và trước dấu phẩy.
- **Cấu trúc:** S + V. However / Nevertheless, S + V.
- Ví dụ: The film was long. **However**, I enjoyed it. (Bộ phim dài. Tuy nhiên, tôi vẫn thích nó.)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Avatar',
          order: 3,
          objectives: ['Đọc hiểu về bộ phim Avatar'],
          type: 'reading',
          reading: {
            title: 'Avatar - A Sci-Fi Masterpiece',
            passage: 'Avatar is a famous science fiction film directed by James Cameron. It was released in 2009 and quickly became one of the highest-grossing films of all time. The film is set in the mid-22nd century on Pandora, a beautiful but dangerous moon. The story follows Jake Sully, a former marine who uses an "avatar" body to interact with the native people of Pandora, the Na\'vi. Although the plot is quite simple, the visual effects are absolutely stunning and groundbreaking. The film has a strong message about protecting the environment and respecting nature.',
            questions: [
              { question: 'Who directed the film Avatar?', options: ['Steven Spielberg', 'James Cameron', 'Christopher Nolan'], answer: 'James Cameron' },
              { question: 'When was Avatar released?', options: ['In 2000', 'In 2009', 'In 2019'], answer: 'In 2009' },
              { question: 'Where is the film set?', options: ['On Earth', 'On Mars', 'On Pandora'], answer: 'On Pandora' },
              { question: 'What are the visual effects of the film like?', options: ['Boring', 'Stunning and groundbreaking', 'Terrible'], answer: 'Stunning and groundbreaking' },
              { question: 'What is the main message of the film?', options: ['Protecting the environment', 'Exploring space', 'Fighting wars'], answer: 'Protecting the environment' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit9',
      title: 'Unit 9: Festivals around the World',
      order: 9,
      description: 'Từ vựng về các lễ hội. Ngữ pháp: Đại từ nghi vấn, Trạng ngữ.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Festivals',
          order: 1,
          objectives: ['Từ vựng về các lễ hội và hoạt động lễ hội'],
          type: 'vocabulary',
          words: [
            { word: 'celebrate', ipa: '/ˈselɪbreɪt/', pos: 'v', meaning_vi: 'kỷ niệm, ăn mừng', example_en: 'How do you celebrate Tet?', example_vi: 'Bạn ăn mừng Tết như thế nào?' },
            { word: 'festival', ipa: '/ˈfestɪvl/', pos: 'n', meaning_vi: 'lễ hội', example_en: 'The flower festival is held every year.', example_vi: 'Lễ hội hoa được tổ chức hàng năm.' },
            { word: 'parade', ipa: '/pəˈreɪd/', pos: 'n', meaning_vi: 'cuộc diễu hành', example_en: 'We watched the colorful parade on the street.', example_vi: 'Chúng tôi đã xem cuộc diễu hành đầy màu sắc trên đường phố.' },
            { word: 'costume', ipa: '/ˈkɒstjuːm/', pos: 'n', meaning_vi: 'trang phục', example_en: 'People wear traditional costumes during the festival.', example_vi: 'Mọi người mặc trang phục truyền thống trong suốt lễ hội.' },
            { word: 'feast', ipa: '/fiːst/', pos: 'n', meaning_vi: 'bữa tiệc lớn', example_en: 'They prepared a huge feast for the guests.', example_vi: 'Họ đã chuẩn bị một bữa tiệc lớn cho khách.' },
            { word: 'fireworks', ipa: '/ˈfaɪəwɜːks/', pos: 'n', meaning_vi: 'pháo hoa', example_en: 'The fireworks display was spectacular.', example_vi: 'Màn trình diễn pháo hoa thật ngoạn mục.' },
            { word: 'religious', ipa: '/rɪˈlɪdʒəs/', pos: 'adj', meaning_vi: 'thuộc về tôn giáo', example_en: 'Christmas is a religious holiday.', example_vi: 'Giáng sinh là một ngày lễ tôn giáo.' },
            { word: 'superstitious', ipa: '/ˌsuːpəˈstɪʃəs/', pos: 'adj', meaning_vi: 'mê tín', example_en: 'Some people are superstitious about black cats.', example_vi: 'Một số người mê tín về mèo đen.' },
            { word: 'joyful', ipa: '/ˈdʒɔɪfl/', pos: 'adj', meaning_vi: 'vui vẻ', example_en: 'The atmosphere was joyful and lively.', example_vi: 'Bầu không khí thật vui vẻ và sống động.' },
            { word: 'gather', ipa: '/ˈɡæðə(r)/', pos: 'v', meaning_vi: 'tụ họp', example_en: 'Families gather together at Tet.', example_vi: 'Các gia đình tụ họp cùng nhau vào dịp Tết.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Wh-questions and Adverbial phrases',
          order: 2,
          objectives: ['Sử dụng từ để hỏi (Wh-questions) và cụm trạng từ (Adverbial phrases)'],
          type: 'grammar',
          grammar: {
            title: 'Wh-questions and Adverbial phrases',
            content: `
### Từ để hỏi (Wh-questions)
- **Who:** Ai (hỏi về người)
- **What:** Cái gì (hỏi về vật, sự việc)
- **Where:** Ở đâu (hỏi về nơi chốn)
- **When:** Khi nào (hỏi về thời gian)
- **Why:** Tại sao (hỏi về lý do)
- **How:** Như thế nào (hỏi về cách thức, phương tiện)
- **Ví dụ:** **Where** is the festival held? (Lễ hội được tổ chức ở đâu?)

### Cụm trạng từ (Adverbial phrases)
- Cụm trạng từ cung cấp thêm thông tin về thời gian, nơi chốn, cách thức, lý do, v.v. cho hành động trong câu.
- **Trạng từ chỉ thời gian (Time):** in the morning, on Monday, every year...
- **Trạng từ chỉ nơi chốn (Place):** in the park, at home, on the street...
- **Trạng từ chỉ cách thức (Manner):** very quickly, with enthusiasm...
- **Trạng từ chỉ lý do (Reason):** for fun, to celebrate the harvest...
- **Ví dụ:** They celebrate the festival **every year** (thời gian) **in the town square** (nơi chốn).
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - La Tomatina',
          order: 3,
          objectives: ['Đọc hiểu về lễ hội ném cà chua La Tomatina'],
          type: 'reading',
          reading: {
            title: 'La Tomatina - The Tomato Festival',
            passage: 'La Tomatina is a famous festival held in the town of Buñol, Spain. It takes place on the last Wednesday of August every year. During the festival, thousands of people from all over the world gather in the streets to throw over-ripe tomatoes at each other. It is basically a giant tomato fight just for fun! The fight lasts for exactly one hour. After that, the town is covered in red tomato juice. Fire trucks then come to clean the streets with water. People also wash themselves in the local river. It is a very messy but joyful event.',
            questions: [
              { question: 'Where is La Tomatina held?', options: ['In Italy', 'In Spain', 'In Mexico'], answer: 'In Spain' },
              { question: 'When does the festival take place?', options: ['In July', 'On the first Wednesday of August', 'On the last Wednesday of August'], answer: 'On the last Wednesday of August' },
              { question: 'What do people do during the festival?', options: ['Eat tomatoes', 'Throw tomatoes at each other', 'Plant tomatoes'], answer: 'Throw tomatoes at each other' },
              { question: 'How long does the tomato fight last?', options: ['One hour', 'Two hours', 'All day'], answer: 'One hour' },
              { question: 'How are the streets cleaned after the fight?', options: ['By rain', 'By people sweeping', 'By fire trucks with water'], answer: 'By fire trucks with water' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit10',
      title: 'Unit 10: Energy Sources',
      order: 10,
      description: 'Từ vựng về các nguồn năng lượng. Ngữ pháp: Thì tương lai tiếp diễn, Câu bị động.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Energy sources',
          order: 1,
          objectives: ['Từ vựng về năng lượng tái tạo và không tái tạo'],
          type: 'vocabulary',
          words: [
            { word: 'renewable', ipa: '/rɪˈnjuːəbl/', pos: 'adj', meaning_vi: 'có thể tái tạo', example_en: 'Solar energy is a renewable energy source.', example_vi: 'Năng lượng mặt trời là một nguồn năng lượng tái tạo.' },
            { word: 'non-renewable', ipa: '/ˌnɒn rɪˈnjuːəbl/', pos: 'adj', meaning_vi: 'không thể tái tạo', example_en: 'Coal and oil are non-renewable sources.', example_vi: 'Than đá và dầu mỏ là các nguồn không tái tạo.' },
            { word: 'solar power', ipa: '/ˈsəʊlə(r) ˈpaʊə(r)/', pos: 'n', meaning_vi: 'năng lượng mặt trời', example_en: 'We use solar power to heat water.', example_vi: 'Chúng tôi dùng năng lượng mặt trời để đun nước.' },
            { word: 'wind energy', ipa: '/wɪnd ˈenədʒi/', pos: 'n', meaning_vi: 'năng lượng gió', example_en: 'Wind energy is clean and safe.', example_vi: 'Năng lượng gió sạch và an toàn.' },
            { word: 'fossil fuels', ipa: '/ˈfɒsl ˈfjuːəlz/', pos: 'n', meaning_vi: 'nhiên liệu hóa thạch', example_en: 'Burning fossil fuels causes pollution.', example_vi: 'Đốt nhiên liệu hóa thạch gây ô nhiễm.' },
            { word: 'electricity', ipa: '/ɪˌlekˈtrɪsəti/', pos: 'n', meaning_vi: 'điện', example_en: 'The house is powered by electricity.', example_vi: 'Ngôi nhà được cung cấp năng lượng bằng điện.' },
            { word: 'shortage', ipa: '/ˈʃɔːtɪdʒ/', pos: 'n', meaning_vi: 'sự thiếu hụt', example_en: 'There is a shortage of clean water.', example_vi: 'Đang có sự thiếu hụt nước sạch.' },
            { word: 'conserve', ipa: '/kənˈsɜːv/', pos: 'v', meaning_vi: 'tiết kiệm, bảo tồn', example_en: 'We should conserve energy at home.', example_vi: 'Chúng ta nên tiết kiệm năng lượng ở nhà.' },
            { word: 'plentiful', ipa: '/ˈplentɪfl/', pos: 'adj', meaning_vi: 'dồi dào', example_en: 'Sunlight is a plentiful source of energy.', example_vi: 'Ánh sáng mặt trời là một nguồn năng lượng dồi dào.' },
            { word: 'limited', ipa: '/ˈlɪmɪtɪd/', pos: 'adj', meaning_vi: 'có hạn', example_en: 'Natural resources are limited.', example_vi: 'Tài nguyên thiên nhiên là có hạn.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Future Continuous and Passive Voice',
          order: 2,
          objectives: ['Sử dụng thì Tương lai tiếp diễn và Câu bị động'],
          type: 'grammar',
          grammar: {
            title: 'Future Continuous and Passive Voice',
            content: `
### Thì Tương lai tiếp diễn (Future Continuous)
- Dùng để diễn tả một hành động sẽ đang diễn ra tại một thời điểm xác định trong tương lai.
- **Cấu trúc:** S + will be + V-ing
- **Ví dụ:** At 8 o'clock tomorrow, I **will be studying** English. (Vào lúc 8 giờ ngày mai, tôi sẽ đang học tiếng Anh.)

### Câu bị động (Passive Voice)
- Dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.
- **Cấu trúc chung:** S + be + V3/ed + (by O)
- **Hiện tại đơn:** S + am/is/are + V3/ed
  - Ví dụ: Solar energy **is used** to heat water. (Năng lượng mặt trời được sử dụng để đun nước.)
- **Tương lai đơn:** S + will be + V3/ed
  - Ví dụ: More wind turbines **will be built** next year. (Nhiều tuabin gió hơn sẽ được xây dựng vào năm tới.)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Renewable Energy',
          order: 3,
          objectives: ['Đọc hiểu về các nguồn năng lượng tái tạo'],
          type: 'reading',
          reading: {
            title: 'The Importance of Renewable Energy',
            passage: 'Today, most of our energy comes from fossil fuels like coal, oil, and natural gas. However, these are non-renewable sources, which means they will run out one day. Moreover, burning fossil fuels causes air pollution and global warming. Therefore, we need to find alternative energy sources. Renewable energy sources, such as solar power, wind power, and hydro power, are becoming more and more popular. They are clean, safe, and plentiful. Solar panels can change sunlight into electricity. Wind turbines use the wind to generate power. In the future, renewable energy will play a very important role in protecting our environment.',
            questions: [
              { question: 'Where does most of our energy come from today?', options: ['Solar power', 'Fossil fuels', 'Wind power'], answer: 'Fossil fuels' },
              { question: 'What is a problem with fossil fuels?', options: ['They are too cheap', 'They are clean', 'They will run out and cause pollution'], answer: 'They will run out and cause pollution' },
              { question: 'Which of the following is a renewable energy source?', options: ['Coal', 'Oil', 'Solar power'], answer: 'Solar power' },
              { question: 'What do solar panels do?', options: ['Change sunlight into electricity', 'Make wind', 'Clean the air'], answer: 'Change sunlight into electricity' },
              { question: 'Why is renewable energy important for the future?', options: ['Because it is expensive', 'Because it protects the environment', 'Because it is dangerous'], answer: 'Because it protects the environment' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit11',
      title: 'Unit 11: Travelling in the Future',
      order: 11,
      description: 'Từ vựng về phương tiện giao thông tương lai. Ngữ pháp: Will cho dự đoán tương lai, Đại từ sở hữu.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Future transport',
          order: 1,
          objectives: ['Từ vựng về các phương tiện giao thông hiện đại và tương lai'],
          type: 'vocabulary',
          words: [
            { word: 'flying car', ipa: '/ˈflaɪɪŋ kɑː(r)/', pos: 'n', meaning_vi: 'ô tô bay', example_en: 'Flying cars will be common in the future.', example_vi: 'Ô tô bay sẽ phổ biến trong tương lai.' },
            { word: 'driverless car', ipa: '/ˈdraɪvələs kɑː(r)/', pos: 'n', meaning_vi: 'xe tự lái', example_en: 'Driverless cars are safer than normal ones.', example_vi: 'Xe tự lái an toàn hơn xe bình thường.' },
            { word: 'high-speed train', ipa: '/haɪ spiːd treɪn/', pos: 'n', meaning_vi: 'tàu cao tốc', example_en: 'I want to travel by high-speed train.', example_vi: 'Tôi muốn đi du lịch bằng tàu cao tốc.' },
            { word: 'teleport', ipa: '/ˈtelɪpɔːt/', pos: 'v', meaning_vi: 'dịch chuyển tức thời', example_en: 'Will people be able to teleport in 2100?', example_vi: 'Liệu con người có thể dịch chuyển tức thời vào năm 2100 không?' },
            { word: 'spacecraft', ipa: '/ˈspeɪskrɑːft/', pos: 'n', meaning_vi: 'tàu vũ trụ', example_en: 'The spacecraft landed on Mars.', example_vi: 'Tàu vũ trụ đã hạ cánh trên sao Hỏa.' },
            { word: 'eco-friendly', ipa: '/ˌiːkəʊ ˈfrendli/', pos: 'adj', meaning_vi: 'thân thiện với môi trường', example_en: 'Electric bikes are eco-friendly.', example_vi: 'Xe đạp điện thân thiện với môi trường.' },
            { word: 'convenient', ipa: '/kənˈviːniənt/', pos: 'adj', meaning_vi: 'tiện lợi', example_en: 'Travelling by plane is very convenient.', example_vi: 'Đi du lịch bằng máy bay rất tiện lợi.' },
            { word: 'automated', ipa: '/ˈɔːtəmeɪtɪd/', pos: 'adj', meaning_vi: 'tự động hóa', example_en: 'The system is fully automated.', example_vi: 'Hệ thống được tự động hóa hoàn toàn.' },
            { word: 'solar-powered', ipa: '/ˈsəʊlə(r) ˈpaʊəd/', pos: 'adj', meaning_vi: 'chạy bằng năng lượng mặt trời', example_en: 'This boat is solar-powered.', example_vi: 'Con thuyền này chạy bằng năng lượng mặt trời.' },
            { word: 'underwater', ipa: '/ˌʌndəˈwɔːtə(r)/', pos: 'adj', meaning_vi: 'dưới nước', example_en: 'They are building an underwater tunnel.', example_vi: 'Họ đang xây dựng một đường hầm dưới nước.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - "Will" for predictions and Possessive pronouns',
          order: 2,
          objectives: ['Sử dụng "Will" để dự đoán và Đại từ sở hữu'],
          type: 'grammar',
          grammar: {
            title: '"Will" for predictions and Possessive pronouns',
            content: `
### "Will" cho dự đoán tương lai (Will for future predictions)
- Chúng ta dùng **will** hoặc **won't** (will not) để đưa ra dự đoán về những điều có thể xảy ra trong tương lai.
- Thường đi kèm với các từ như: think, hope, believe, perhaps, probably.
- **Ví dụ:** I think flying cars **will** be popular in 2050. (Tôi nghĩ ô tô bay sẽ phổ biến vào năm 2050.)
- **Ví dụ:** We **won't** use petrol cars in the future. (Chúng ta sẽ không sử dụng xe chạy xăng trong tương lai.)

### Đại từ sở hữu (Possessive pronouns)
- Dùng để thay thế cho một danh từ có chứa tính từ sở hữu đã được nhắc đến trước đó, tránh lặp từ.
- **Đại từ sở hữu = Tính từ sở hữu + Danh từ**
- Các đại từ sở hữu: mine (của tôi), yours (của bạn), his (của anh ấy), hers (của cô ấy), ours (của chúng ta), theirs (của họ).
- **Ví dụ:** This is my bike. **Yours** (your bike) is over there. (Đây là xe đạp của tôi. Của bạn ở đằng kia.)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Transport in the Future',
          order: 3,
          objectives: ['Đọc hiểu về các phương tiện giao thông trong tương lai'],
          type: 'reading',
          reading: {
            title: 'How Will We Travel in the Future?',
            passage: 'Transport in the future will be very different from today. We will probably have flying cars that can take off and land vertically. This will help solve the problem of traffic jams in big cities. Driverless cars will also become very common. They will use sensors and computers to drive safely without human control. For long distances, we might travel in hyperloops - special trains that run in tubes at very high speeds, up to 1000 km per hour. Moreover, all future transport will be eco-friendly, using solar power or electricity instead of fossil fuels to keep the air clean.',
            questions: [
              { question: 'What is one benefit of flying cars?', options: ['They are cheap', 'They help solve traffic jams', 'They are slow'], answer: 'They help solve traffic jams' },
              { question: 'How will driverless cars work?', options: ['Using magic', 'Using sensors and computers', 'Using remote controls'], answer: 'Using sensors and computers' },
              { question: 'What is a hyperloop?', options: ['A flying bus', 'A slow boat', 'A special high-speed train in a tube'], answer: 'A special high-speed train in a tube' },
              { question: 'How fast might hyperloops travel?', options: ['100 km per hour', '500 km per hour', 'Up to 1000 km per hour'], answer: 'Up to 1000 km per hour' },
              { question: 'What kind of energy will future transport use?', options: ['Fossil fuels', 'Solar power or electricity', 'Coal'], answer: 'Solar power or electricity' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit12',
      title: 'Unit 12: English-speaking Countries',
      order: 12,
      description: 'Từ vựng về các quốc gia nói tiếng Anh. Ngữ pháp: Mạo từ (a/an/the/zero article).',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Countries and cultures',
          order: 1,
          objectives: ['Từ vựng về các quốc gia, con người và văn hóa'],
          type: 'vocabulary',
          words: [
            { word: 'native speaker', ipa: '/ˈneɪtɪv ˈspiːkə(r)/', pos: 'n', meaning_vi: 'người bản ngữ', example_en: 'He is a native speaker of English.', example_vi: 'Anh ấy là người bản ngữ tiếng Anh.' },
            { word: 'official language', ipa: '/əˈfɪʃl ˈlæŋɡwɪdʒ/', pos: 'n', meaning_vi: 'ngôn ngữ chính thức', example_en: 'English is the official language of many countries.', example_vi: 'Tiếng Anh là ngôn ngữ chính thức của nhiều quốc gia.' },
            { word: 'accent', ipa: '/ˈæksent/', pos: 'n', meaning_vi: 'giọng, ngữ điệu', example_en: 'She has a strong Australian accent.', example_vi: 'Cô ấy có giọng Úc rất nặng.' },
            { word: 'culture', ipa: '/ˈkʌltʃə(r)/', pos: 'n', meaning_vi: 'văn hóa', example_en: 'I want to learn about American culture.', example_vi: 'Tôi muốn tìm hiểu về văn hóa Mỹ.' },
            { word: 'symbol', ipa: '/ˈsɪmbl/', pos: 'n', meaning_vi: 'biểu tượng', example_en: 'The kangaroo is a symbol of Australia.', example_vi: 'Kangaroo là một biểu tượng của nước Úc.' },
            { word: 'scenery', ipa: '/ˈsiːnəri/', pos: 'n', meaning_vi: 'phong cảnh', example_en: 'The scenery in New Zealand is breathtaking.', example_vi: 'Phong cảnh ở New Zealand thật ngoạn mục.' },
            { word: 'diverse', ipa: '/daɪˈvɜːs/', pos: 'adj', meaning_vi: 'đa dạng', example_en: 'Canada has a diverse population.', example_vi: 'Canada có một dân số đa dạng.' },
            { word: 'unique', ipa: '/juˈniːk/', pos: 'adj', meaning_vi: 'độc đáo, duy nhất', example_en: 'Every culture is unique.', example_vi: 'Mỗi nền văn hóa đều độc đáo.' },
            { word: 'landmark', ipa: '/ˈlændmɑːk/', pos: 'n', meaning_vi: 'danh lam thắng cảnh, cột mốc', example_en: 'The Statue of Liberty is a famous landmark.', example_vi: 'Tượng Nữ thần Tự do là một danh lam thắng cảnh nổi tiếng.' },
            { word: 'attract', ipa: '/əˈtrækt/', pos: 'v', meaning_vi: 'thu hút', example_en: 'The festival attracts thousands of visitors.', example_vi: 'Lễ hội thu hút hàng ngàn du khách.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Articles (a/an/the/zero article)',
          order: 2,
          objectives: ['Sử dụng đúng mạo từ a, an, the và trường hợp không dùng mạo từ'],
          type: 'grammar',
          grammar: {
            title: 'Articles (a/an/the/zero article)',
            content: `
### Mạo từ không xác định (a/an)
- Dùng trước danh từ đếm được số ít, khi nhắc đến lần đầu tiên hoặc chỉ một đối tượng chung chung.
- **a:** đứng trước danh từ bắt đầu bằng phụ âm (a book, a car).
- **an:** đứng trước danh từ bắt đầu bằng nguyên âm u, e, o, a, i (an apple, an hour).

### Mạo từ xác định (the)
- Dùng khi cả người nói và người nghe đều biết đối tượng đang được nhắc đến là ai, cái gì.
- Dùng trước những sự vật là duy nhất (the sun, the moon, the Earth).
- Dùng trước tên một số quốc gia có chứa các từ như States, Kingdom, Republic (the USA, the UK).
- **Ví dụ:** I read **a** book. **The** book is very interesting.

### Không dùng mạo từ (Zero article)
- Không dùng mạo từ trước danh từ số nhiều hoặc danh từ không đếm được mang nghĩa chung chung.
- Không dùng trước tên hầu hết các quốc gia, thành phố, đường phố, ngôn ngữ, bữa ăn.
- **Ví dụ:** I love **music**. She lives in **Vietnam**. They speak **English**.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Australia',
          order: 3,
          objectives: ['Đọc hiểu về đất nước Australia'],
          type: 'reading',
          reading: {
            title: 'Australia - The Land Down Under',
            passage: 'Australia is a unique country because it is also a continent. It is often called "The Land Down Under" because it is located in the Southern Hemisphere. English is the official language, but Australians have a very special accent and some unique words. The capital city is Canberra, but Sydney is the largest and most famous city with the beautiful Sydney Opera House. Australia is famous for its amazing wildlife. You can find animals here that don\'t exist anywhere else in the world, such as kangaroos, koalas, and emus. The scenery is also very diverse, from beautiful beaches to large deserts called the Outback.',
            questions: [
              { question: 'Why is Australia called "The Land Down Under"?', options: ['Because it is under the sea', 'Because it is in the Southern Hemisphere', 'Because it is very small'], answer: 'Because it is in the Southern Hemisphere' },
              { question: 'What is the official language of Australia?', options: ['Australian', 'English', 'French'], answer: 'English' },
              { question: 'What is the capital city of Australia?', options: ['Sydney', 'Melbourne', 'Canberra'], answer: 'Canberra' },
              { question: 'Which of the following animals is unique to Australia?', options: ['Lion', 'Kangaroo', 'Elephant'], answer: 'Kangaroo' },
              { question: 'What is the Outback?', options: ['A large desert in Australia', 'A famous beach', 'A big city'], answer: 'A large desert in Australia' }
            ]
          }
        }
      ]
    }
  ]
};
