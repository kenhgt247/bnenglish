export const grade8Data = {
  grade: {
    id: 'grade8',
    name: 'Tiếng Anh Lớp 8 (Global Success)',
    order: 3
  },
  units: [
    {
      id: 'unit1',
      title: 'Unit 1: Leisure Time',
      order: 1,
      description: 'Từ vựng về các hoạt động giải trí. Ngữ pháp: Động từ chỉ sự yêu thích/không thích + V-ing/To-V.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Leisure activities',
          order: 1,
          objectives: ['Từ vựng về các hoạt động giải trí phổ biến'],
          type: 'vocabulary',
          words: [
            { word: 'leisure time', ipa: '/ˈleʒə taɪm/', pos: 'n', meaning_vi: 'thời gian rảnh rỗi', example_en: 'What do you do in your leisure time?', example_vi: 'Bạn làm gì trong thời gian rảnh rỗi?' },
            { word: 'surfing the net', ipa: '/ˈsɜːfɪŋ ðə net/', pos: 'n', meaning_vi: 'lướt mạng', example_en: 'He spends too much time surfing the net.', example_vi: 'Anh ấy dành quá nhiều thời gian lướt mạng.' },
            { word: 'hanging out with friends', ipa: '/ˈhæŋɪŋ aʊt wɪð frendz/', pos: 'n', meaning_vi: 'đi chơi với bạn bè', example_en: 'I enjoy hanging out with friends at the mall.', example_vi: 'Tôi thích đi chơi với bạn bè ở trung tâm thương mại.' },
            { word: 'doing DIY', ipa: '/ˈduːɪŋ ˌdiː aɪ ˈwaɪ/', pos: 'n', meaning_vi: 'làm đồ tự chế (Do It Yourself)', example_en: 'My dad likes doing DIY around the house.', example_vi: 'Bố tôi thích tự làm đồ đạc quanh nhà.' },
            { word: 'craft kit', ipa: '/krɑːft kɪt/', pos: 'n', meaning_vi: 'bộ dụng cụ thủ công', example_en: 'She bought a craft kit to make jewelry.', example_vi: 'Cô ấy đã mua một bộ dụng cụ thủ công để làm đồ trang sức.' },
            { word: 'socializing', ipa: '/ˈsəʊʃəlaɪzɪŋ/', pos: 'n', meaning_vi: 'giao lưu, kết bạn', example_en: 'Socializing is important for teenagers.', example_vi: 'Giao lưu kết bạn rất quan trọng đối với thanh thiếu niên.' },
            { word: 'addicted', ipa: '/əˈdɪktɪd/', pos: 'adj', meaning_vi: 'nghiện (cái gì đó)', example_en: 'He is addicted to computer games.', example_vi: 'Anh ấy bị nghiện trò chơi máy tính.' },
            { word: 'relaxing', ipa: '/rɪˈlæksɪŋ/', pos: 'adj', meaning_vi: 'thư giãn', example_en: 'Listening to music is very relaxing.', example_vi: 'Nghe nhạc rất thư giãn.' },
            { word: 'exciting', ipa: '/ɪkˈsaɪtɪŋ/', pos: 'adj', meaning_vi: 'thú vị, hào hứng', example_en: 'The movie was really exciting.', example_vi: 'Bộ phim thực sự rất thú vị.' },
            { word: 'boring', ipa: '/ˈbɔːrɪŋ/', pos: 'adj', meaning_vi: 'nhàm chán', example_en: 'I find this book very boring.', example_vi: 'Tôi thấy cuốn sách này rất nhàm chán.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Verbs of liking/disliking + V-ing/To-V',
          order: 2,
          objectives: ['Sử dụng V-ing hoặc To-V sau các động từ chỉ sự yêu thích/không thích'],
          type: 'grammar',
          grammar: {
            title: 'Verbs of liking/disliking + V-ing/To-V',
            content: `
### Động từ chỉ sự yêu thích/không thích + V-ing/To-V
- **Cách dùng:** Một số động từ chỉ cảm xúc có thể đi kèm với danh động từ (V-ing) hoặc động từ nguyên mẫu có "to" (To-V).
- **Các động từ chỉ đi với V-ing:**
  - enjoy, fancy, detest, dislike, mind...
  - Ví dụ: I **enjoy reading** books.
- **Các động từ đi được với cả V-ing và To-V (nghĩa không đổi):**
  - like, love, hate, prefer...
  - Ví dụ: I **love playing** football. = I **love to play** football.
- **Lưu ý:** Thường thì V-ing dùng để nói về sở thích chung chung, còn To-V dùng để nói về sở thích trong một tình huống cụ thể hoặc thói quen.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Leisure Activities in the Past',
          order: 3,
          objectives: ['Đọc hiểu về các hoạt động giải trí trong quá khứ'],
          type: 'reading',
          reading: {
            title: 'Leisure Activities in the Past',
            passage: 'In the past, children didn\'t have modern gadgets like smartphones or tablets. They spent most of their leisure time outdoors. They played traditional games such as hide-and-seek, tug-of-war, and skipping rope. They also flew kites and went swimming in the rivers. In the evenings, families gathered around the fire and told stories or sang songs. Life was simpler and people were more connected to nature and each other. Today, although we have many hi-tech devices, many people still enjoy these traditional activities because they are fun and healthy.',
            questions: [
              { question: 'What did children NOT have in the past?', options: ['Smartphones', 'Kites', 'Traditional games'], answer: 'Smartphones' },
              { question: 'Where did they spend most of their leisure time?', options: ['Indoors', 'Outdoors', 'At school'], answer: 'Outdoors' },
              { question: 'What are some traditional games mentioned?', options: ['Football and basketball', 'Hide-and-seek and tug-of-war', 'Video games'], answer: 'Hide-and-seek and tug-of-war' },
              { question: 'What did families do in the evenings?', options: ['Watched TV', 'Told stories or sang songs', 'Went to the cinema'], answer: 'Told stories or sang songs' },
              { question: 'Why do people still enjoy traditional activities today?', options: ['Because they are expensive', 'Because they are fun and healthy', 'Because they are difficult'], answer: 'Because they are fun and healthy' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit2',
      title: 'Unit 2: Life in the Countryside',
      order: 2,
      description: 'Từ vựng về cuộc sống ở nông thôn. Ngữ pháp: So sánh hơn của trạng từ.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Countryside life',
          order: 1,
          objectives: ['Từ vựng về các hoạt động và cảnh vật ở nông thôn'],
          type: 'vocabulary',
          words: [
            { word: 'harvest time', ipa: '/ˈhɑːvɪst taɪm/', pos: 'n', meaning_vi: 'mùa gặt', example_en: 'Everyone is busy during harvest time.', example_vi: 'Mọi người đều bận rộn trong mùa gặt.' },
            { word: 'paddy field', ipa: '/ˈpædi fiːld/', pos: 'n', meaning_vi: 'cánh đồng lúa', example_en: 'The paddy fields look like a yellow carpet.', example_vi: 'Những cánh đồng lúa trông như một tấm thảm vàng.' },
            { word: 'buffalo-drawn cart', ipa: '/ˈbʌfələʊ drɔːn kɑːt/', pos: 'n', meaning_vi: 'xe trâu kéo', example_en: 'They use buffalo-drawn carts to carry rice.', example_vi: 'Họ sử dụng xe trâu kéo để chở lúa.' },
            { word: 'herd', ipa: '/hɜːd/', pos: 'v', meaning_vi: 'chăn dắt (gia súc)', example_en: 'The boys are herding the buffaloes.', example_vi: 'Những cậu bé đang chăn trâu.' },
            { word: 'vast', ipa: '/vɑːst/', pos: 'adj', meaning_vi: 'bao la, rộng lớn', example_en: 'The sky in the countryside is vast.', example_vi: 'Bầu trời ở nông thôn thật bao la.' },
            { word: 'peaceful', ipa: '/ˈpiːsfəl/', pos: 'adj', meaning_vi: 'yên bình', example_en: 'I love the peaceful atmosphere of the village.', example_vi: 'Tôi yêu bầu không khí yên bình của ngôi làng.' },
            { word: 'hospitable', ipa: '/hɒˈspɪtəbl/', pos: 'adj', meaning_vi: 'hiếu khách', example_en: 'The local people are very hospitable.', example_vi: 'Người dân địa phương rất hiếu khách.' },
            { word: 'load', ipa: '/ləʊd/', pos: 'v', meaning_vi: 'chất lên, tải lên', example_en: 'They are loading the rice onto the truck.', example_vi: 'Họ đang chất lúa lên xe tải.' },
            { word: 'unload', ipa: '/ʌnˈləʊd/', pos: 'v', meaning_vi: 'dỡ xuống', example_en: 'We helped them unload the goods.', example_vi: 'Chúng tôi đã giúp họ dỡ hàng xuống.' },
            { word: 'convenient', ipa: '/kənˈviːniənt/', pos: 'adj', meaning_vi: 'tiện lợi', example_en: 'Living in the city is more convenient.', example_vi: 'Sống ở thành phố thì tiện lợi hơn.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Comparative Adverbs',
          order: 2,
          objectives: ['So sánh hơn của trạng từ'],
          type: 'grammar',
          grammar: {
            title: 'Comparative Adverbs',
            content: `
### So sánh hơn của trạng từ (Comparative Adverbs)
- **Cách dùng:** Dùng để so sánh cách thức thực hiện hành động của hai người hoặc hai vật.
- **Cấu trúc:**
  - **Trạng từ ngắn (1 âm tiết):** S1 + V + adv-er + than + S2
    - Ví dụ: He runs **faster than** me. (Anh ấy chạy nhanh hơn tôi)
  - **Trạng từ dài (2 âm tiết trở lên - thường kết thúc bằng -ly):** S1 + V + more + adv + than + S2
    - Ví dụ: She speaks English **more fluently than** her brother. (Cô ấy nói tiếng Anh trôi chảy hơn anh trai mình)
- **Các trường hợp bất quy tắc:**
  - well -> better
  - badly -> worse
  - far -> farther/further
  - hard -> harder
  - fast -> faster
  - early -> earlier
  - late -> later
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Life in the Countryside',
          order: 3,
          objectives: ['Đọc hiểu về cuộc sống nông thôn'],
          type: 'reading',
          reading: {
            title: 'Life in the Countryside',
            passage: 'Life in the countryside has changed a lot over the years. In the past, people worked hard in the fields from dawn till dusk. There was no electricity or running water. Today, many villages have modern facilities like internet, schools, and hospitals. People use machines to help with farming, so the work is less tiring. However, the countryside still keeps its natural beauty and fresh air. People are friendly and always ready to help each other. Many city dwellers like to visit the countryside on weekends to escape the noise and pollution of the city.',
            questions: [
              { question: 'How was life in the countryside in the past?', options: ['Easy and modern', 'Hard and simple', 'Noisy and busy'], answer: 'Hard and simple' },
              { question: 'What modern facilities do many villages have today?', options: ['Only schools', 'Internet, schools, and hospitals', 'No modern facilities'], answer: 'Internet, schools, and hospitals' },
              { question: 'Why is farming work less tiring now?', options: ['Because people are stronger', 'Because people use machines', 'Because there is less work'], answer: 'Because people use machines' },
              { question: 'What does the countryside still keep?', options: ['Natural beauty and fresh air', 'Noise and pollution', 'Old machines'], answer: 'Natural beauty and fresh air' },
              { question: 'Why do city dwellers visit the countryside?', options: ['To find a job', 'To escape noise and pollution', 'To buy machines'], answer: 'To escape noise and pollution' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit3',
      title: 'Unit 3: Teenagers',
      order: 3,
      description: 'Từ vựng về các vấn đề của thanh thiếu niên. Ngữ pháp: Câu hỏi có từ để hỏi (ôn tập), Câu cảm thán.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Teenagers',
          order: 1,
          objectives: ['Từ vựng về trường học, áp lực và các hoạt động của teen'],
          type: 'vocabulary',
          words: [
            { word: 'peer pressure', ipa: '/pɪə(r) ˈpreʃə(r)/', pos: 'n', meaning_vi: 'áp lực từ bạn bè đồng trang lứa', example_en: 'Many teenagers suffer from peer pressure.', example_vi: 'Nhiều thanh thiếu niên chịu áp lực từ bạn bè.' },
            { word: 'bully', ipa: '/ˈbʊli/', pos: 'v/n', meaning_vi: 'bắt nạt/kẻ bắt nạt', example_en: 'We should stop bullying in schools.', example_vi: 'Chúng ta nên ngăn chặn việc bắt nạt trong trường học.' },
            { word: 'stress', ipa: '/stres/', pos: 'n', meaning_vi: 'căng thẳng', example_en: 'Exam season causes a lot of stress.', example_vi: 'Mùa thi cử gây ra rất nhiều căng thẳng.' },
            { word: 'concentrate', ipa: '/ˈkɒnsntreɪt/', pos: 'v', meaning_vi: 'tập trung', example_en: 'It\'s hard to concentrate with all this noise.', example_vi: 'Thật khó để tập trung với tất cả tiếng ồn này.' },
            { word: 'expectation', ipa: '/ˌekspekˈteɪʃn/', pos: 'n', meaning_vi: 'sự kỳ vọng', example_en: 'Parents often have high expectations for their children.', example_vi: 'Cha mẹ thường có kỳ vọng cao vào con cái.' },
            { word: 'forum', ipa: '/ˈfɔːrəm/', pos: 'n', meaning_vi: 'diễn đàn', example_en: 'I joined an online forum for English learners.', example_vi: 'Tôi đã tham gia một diễn đàn trực tuyến cho người học tiếng Anh.' },
            { word: 'upload', ipa: '/ˌʌpˈləʊd/', pos: 'v', meaning_vi: 'tải lên', example_en: 'She uploaded her photos to Facebook.', example_vi: 'Cô ấy đã tải ảnh của mình lên Facebook.' },
            { word: 'browse', ipa: '/braʊz/', pos: 'v', meaning_vi: 'lướt, xem qua', example_en: 'I spent an hour browsing the web.', example_vi: 'Tôi đã dành một giờ để lướt web.' },
            { word: 'coach', ipa: '/kəʊtʃ/', pos: 'n', meaning_vi: 'huấn luyện viên', example_en: 'The football coach is very strict.', example_vi: 'Huấn luyện viên bóng đá rất nghiêm khắc.' },
            { word: 'mature', ipa: '/məˈtʃʊə(r)/', pos: 'adj', meaning_vi: 'trưởng thành', example_en: 'He is very mature for his age.', example_vi: 'Cậu ấy rất trưởng thành so với tuổi của mình.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Wh-questions & Exclamatory sentences',
          order: 2,
          objectives: ['Ôn tập câu hỏi có từ để hỏi và câu cảm thán'],
          type: 'grammar',
          grammar: {
            title: 'Wh-questions & Exclamatory sentences',
            content: `
### 1. Câu hỏi có từ để hỏi (Wh-questions)
- **Cấu trúc:** Wh-word + trợ động từ + S + V?
- **Ví dụ:** What do you do in your free time? (Bạn làm gì vào thời gian rảnh?)
- **Các từ để hỏi phổ biến:** What, Where, When, Why, Who, How, How often, How long...

### 2. Câu cảm thán (Exclamatory sentences)
- **Cách dùng:** Dùng để bày tỏ cảm xúc mạnh mẽ (ngạc nhiên, vui mừng, tức giận...).
- **Cấu trúc với "What":** What + (a/an) + adj + N + (S + V)!
  - Ví dụ: What a beautiful day! (Thật là một ngày đẹp trời!)
- **Cấu trúc với "How":** How + adj/adv + S + V!
  - Ví dụ: How fast he runs! (Anh ấy chạy nhanh quá!)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Teen Stress',
          order: 3,
          objectives: ['Đọc hiểu về áp lực của thanh thiếu niên'],
          type: 'reading',
          reading: {
            title: 'Teen Stress',
            passage: "Teenagers today face many sources of stress. One major cause is academic pressure. Many students feel they must get high grades to please their parents and get into good universities. Another source of stress is peer pressure. Teens often want to fit in with their friends, which can lead to doing things they don't really want to do. Social media also plays a role, as teenagers compare their lives to the perfect images they see online. To cope with stress, it is important for teens to have a healthy lifestyle, talk to someone they trust, and take time to relax and do things they enjoy.",
            questions: [
              { question: 'What is a major cause of stress for teenagers?', options: ['Playing sports', 'Academic pressure', 'Eating healthy food'], answer: 'Academic pressure' },
              { question: 'Why do teens feel peer pressure?', options: ['They want to fit in with friends', 'They want to study harder', 'They want to please their teachers'], answer: 'They want to fit in with friends' },
              { question: 'How does social media cause stress?', options: ['It helps them relax', 'They compare their lives to perfect images online', 'It gives them too much homework'], answer: 'They compare their lives to perfect images online' },
              { question: 'What is NOT mentioned as a way to cope with stress?', options: ['Having a healthy lifestyle', 'Talking to someone they trust', 'Playing video games all day'], answer: 'Playing video games all day' },
              { question: 'What should teens do to relax?', options: ['Worry about grades', 'Do things they enjoy', 'Argue with friends'], answer: 'Do things they enjoy' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit4',
      title: 'Unit 4: Ethnic Groups of Viet Nam',
      order: 4,
      description: 'Từ vựng về các dân tộc Việt Nam. Ngữ pháp: Câu hỏi Yes/No và Wh-questions (ôn tập), Mạo từ (ôn tập).',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Ethnic groups',
          order: 1,
          objectives: ['Từ vựng về văn hóa và đời sống các dân tộc'],
          type: 'vocabulary',
          words: [
            { word: 'ethnic minority', ipa: '/ˈeθnɪk maɪˈnɒrəti/', pos: 'n', meaning_vi: 'dân tộc thiểu số', example_en: 'Vietnam has 53 ethnic minority groups.', example_vi: 'Việt Nam có 53 nhóm dân tộc thiểu số.' },
            { word: 'communal house', ipa: '/ˈkɒmjənl haʊs/', pos: 'n', meaning_vi: 'nhà rông, nhà cộng đồng', example_en: 'The communal house is the heart of the village.', example_vi: 'Nhà rông là trái tim của ngôi làng.' },
            { word: 'stilt house', ipa: '/stɪlt haʊs/', pos: 'n', meaning_vi: 'nhà sàn', example_en: 'Many ethnic groups live in stilt houses.', example_vi: 'Nhiều dân tộc sống trong nhà sàn.' },
            { word: 'terraced field', ipa: '/ˈterəst fiːld/', pos: 'n', meaning_vi: 'ruộng bậc thang', example_en: 'The terraced fields in Mu Cang Chai are beautiful.', example_vi: 'Ruộng bậc thang ở Mù Cang Chải thật đẹp.' },
            { word: 'heritage', ipa: '/ˈherɪtɪdʒ/', pos: 'n', meaning_vi: 'di sản', example_en: 'We should protect our cultural heritage.', example_vi: 'Chúng ta nên bảo vệ di sản văn hóa của mình.' },
            { word: 'costume', ipa: '/ˈkɒstjuːm/', pos: 'n', meaning_vi: 'trang phục', example_en: 'The Hmong have colorful traditional costumes.', example_vi: 'Người H\'Mông có trang phục truyền thống đầy màu sắc.' },
            { word: 'diverse', ipa: '/daɪˈvɜːs/', pos: 'adj', meaning_vi: 'đa dạng', example_en: 'Vietnam is a culturally diverse country.', example_vi: 'Việt Nam là một quốc gia đa dạng về văn hóa.' },
            { word: 'unique', ipa: '/juˈniːk/', pos: 'adj', meaning_vi: 'độc đáo', example_en: 'Each ethnic group has its own unique traditions.', example_vi: 'Mỗi dân tộc đều có những truyền thống độc đáo riêng.' },
            { word: 'custom', ipa: '/ˈkʌstəm/', pos: 'n', meaning_vi: 'phong tục', example_en: 'It is a custom to give lucky money at Tet.', example_vi: 'Tặng tiền lì xì vào dịp Tết là một phong tục.' },
            { word: 'weaving', ipa: '/ˈwiːvɪŋ/', pos: 'n', meaning_vi: 'việc dệt vải', example_en: 'The women are skilled at weaving.', example_vi: 'Những người phụ nữ rất giỏi dệt vải.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Yes/No & Wh-questions, Articles',
          order: 2,
          objectives: ['Ôn tập câu hỏi Yes/No, Wh-questions và Mạo từ'],
          type: 'grammar',
          grammar: {
            title: 'Questions & Articles',
            content: `
### 1. Câu hỏi Yes/No và Wh-questions
- **Yes/No questions:** Trợ động từ + S + V? (Ví dụ: Do you like traditional music?)
- **Wh-questions:** Wh-word + trợ động từ + S + V? (Ví dụ: Where do the Hmong people live?)

### 2. Mạo từ (Articles: a, an, the)
- **A/An:** Dùng trước danh từ đếm được số ít, nhắc đến lần đầu tiên.
  - "A" đứng trước phụ âm (a house, a book).
  - "An" đứng trước nguyên âm (an apple, an hour).
- **The:** Dùng trước danh từ đã được xác định (người nghe và người nói đều biết đó là cái gì).
  - Ví dụ: I have a cat. **The** cat is black.
- **Không dùng mạo từ:** Trước danh từ số nhiều nói chung, tên quốc gia, bữa ăn...
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - The Ede People',
          order: 3,
          objectives: ['Đọc hiểu về dân tộc Ê-đê'],
          type: 'reading',
          reading: {
            title: 'The Ede People',
            passage: 'The Ede are an ethnic minority group living mainly in the Central Highlands of Vietnam. They have a matriarchal society, which means women have a lot of power and property is passed down from mother to daughter. The Ede live in longhouses built on stilts. A longhouse can be up to 100 meters long and houses several generations of a family. They are famous for their traditional music, especially the gong. The gong is not just a musical instrument; it is a sacred object that connects the Ede with their ancestors and the spiritual world. During festivals, everyone gathers around the fire to drink stem wine and dance to the sound of gongs.',
            questions: [
              { question: 'Where do the Ede people mainly live?', options: ['In the North', 'In the Central Highlands', 'In the South'], answer: 'In the Central Highlands' },
              { question: 'What kind of society do the Ede have?', options: ['Patriarchal', 'Matriarchal', 'Egalitarian'], answer: 'Matriarchal' },
              { question: 'Where do the Ede live?', options: ['In modern apartments', 'In longhouses on stilts', 'In brick houses'], answer: 'In longhouses on stilts' },
              { question: 'What is the gong to the Ede people?', options: ['A toy', 'A cooking tool', 'A sacred object and musical instrument'], answer: 'A sacred object and musical instrument' },
              { question: 'What do they do during festivals?', options: ['Watch TV', 'Drink stem wine and dance', 'Go shopping'], answer: 'Drink stem wine and dance' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit5',
      title: 'Unit 5: Our Customs and Traditions',
      order: 5,
      description: "Từ vựng về phong tục và truyền thống. Ngữ pháp: Should/Shouldn't để đưa ra lời khuyên.",
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Customs and Traditions',
          order: 1,
          objectives: ['Từ vựng về các nghi lễ và thói quen văn hóa'],
          type: 'vocabulary',
          words: [
            { word: 'tradition', ipa: '/trəˈdɪʃn/', pos: 'n', meaning_vi: 'truyền thống', example_en: 'It is a tradition to visit relatives at Tet.', example_vi: 'Thăm họ hàng vào dịp Tết là một truyền thống.' },
            { word: 'custom', ipa: '/ˈkʌstəm/', pos: 'n', meaning_vi: 'phong tục', example_en: 'There is a custom of wearing ao dai on special occasions.', example_vi: 'Có phong tục mặc áo dài vào các dịp đặc biệt.' },
            { word: 'worship', ipa: '/ˈwɜːʃɪp/', pos: 'v', meaning_vi: 'thờ cúng', example_en: 'Vietnamese people worship their ancestors.', example_vi: 'Người Việt Nam thờ cúng tổ tiên.' },
            { word: 'ancestor', ipa: '/ˈænsestə(r)/', pos: 'n', meaning_vi: 'tổ tiên', example_en: 'We should show respect to our ancestors.', example_vi: 'Chúng ta nên thể hiện sự tôn trọng đối với tổ tiên.' },
            { word: 'reunion', ipa: '/ˌriːˈjuːniən/', pos: 'n', meaning_vi: 'sự sum họp', example_en: 'Tet is a time for family reunion.', example_vi: 'Tết là thời gian để gia đình sum họp.' },
            { word: 'offering', ipa: '/ˈɒfərɪŋ/', pos: 'n', meaning_vi: 'lễ vật', example_en: 'They placed offerings on the altar.', example_vi: 'Họ đặt lễ vật lên bàn thờ.' },
            { word: 'altar', ipa: '/ˈɔːltə(r)/', pos: 'n', meaning_vi: 'bàn thờ', example_en: 'The altar is decorated with flowers and fruits.', example_vi: 'Bàn thờ được trang trí bằng hoa và trái cây.' },
            { word: 'spiritual', ipa: '/ˈspɪrɪtʃuəl/', pos: 'adj', meaning_vi: 'thuộc về tâm linh', example_en: 'Visiting pagodas is a spiritual activity.', example_vi: 'Đi chùa là một hoạt động tâm linh.' },
            { word: 'respect', ipa: '/rɪˈspekt/', pos: 'v/n', meaning_vi: 'tôn trọng', example_en: 'Children should respect their elders.', example_vi: 'Trẻ em nên tôn trọng người lớn tuổi.' },
            { word: 'generation', ipa: '/ˌdʒenəˈreɪʃn/', pos: 'n', meaning_vi: 'thế hệ', example_en: 'The tradition has been passed down through generations.', example_vi: 'Truyền thống đã được truyền qua nhiều thế hệ.' }
          ]
        },
        {
          id: 'lesson2',
          title: "Lesson 2: Grammar - Should/Shouldn't",
          order: 2,
          objectives: ["Sử dụng Should/Shouldn't để đưa ra lời khuyên"],
          type: 'grammar',
          grammar: {
            title: "Should / Shouldn't",
            content: `
### Should / Shouldn't (Nên / Không nên)
- **Cách dùng:** Dùng để đưa ra lời khuyên, ý kiến về việc gì đó là tốt hay không tốt để làm.
- **Cấu trúc:**
  - **Khẳng định:** S + should + V(nguyên thể)
    - Ví dụ: You **should respect** older people. (Bạn nên tôn trọng người lớn tuổi.)
  - **Phủ định:** S + shouldn't (should not) + V(nguyên thể)
    - Ví dụ: You **shouldn't wear** shorts to the pagoda. (Bạn không nên mặc quần đùi đến chùa.)
  - **Nghi vấn:** Should + S + V(nguyên thể)?
    - Ví dụ: **Should** I bring a gift? (Tôi có nên mang theo quà không?)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Tet Holiday Customs',
          order: 3,
          objectives: ['Đọc hiểu về các phong tục ngày Tết'],
          type: 'reading',
          reading: {
            title: 'Tet Holiday Customs',
            passage: "Tet is the most important festival in Vietnam. Before Tet, people clean and decorate their houses with peach blossoms or apricot blossoms. They also make Chung cake, a traditional food made from sticky rice, green beans, and pork. During Tet, families gather to welcome the New Year. Children receive lucky money in red envelopes from adults. People visit their relatives and friends to wish them a happy and prosperous year. It is a custom to go to the pagoda to pray for good luck and health. However, there are also things people shouldn't do during Tet, such as sweeping the floor on the first day, because they believe it will sweep away good luck.",
            questions: [
              { question: 'What do people do before Tet?', options: ['Clean and decorate their houses', 'Go to the beach', 'Sleep all day'], answer: 'Clean and decorate their houses' },
              { question: 'What is Chung cake made from?', options: ['Wheat flour and sugar', 'Sticky rice, green beans, and pork', 'Fish and vegetables'], answer: 'Sticky rice, green beans, and pork' },
              { question: 'What do children receive during Tet?', options: ['Books', 'Lucky money', 'New clothes only'], answer: 'Lucky money' },
              { question: 'Why do people go to the pagoda?', options: ['To buy food', 'To pray for good luck and health', 'To meet friends'], answer: 'To pray for good luck and health' },
              { question: "What shouldn't people do on the first day of Tet?", options: ['Eat Chung cake', 'Sweep the floor', 'Visit relatives'], answer: 'Sweep the floor' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit6',
      title: 'Unit 6: Lifestyles',
      order: 6,
      description: 'Từ vựng về các lối sống khác nhau. Ngữ pháp: Câu điều kiện loại 1.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Lifestyles',
          order: 1,
          objectives: ['Từ vựng về thói quen và cách sống'],
          type: 'vocabulary',
          words: [
            { word: 'lifestyle', ipa: '/ˈlaɪfstaɪl/', pos: 'n', meaning_vi: 'lối sống', example_en: 'She has a very healthy lifestyle.', example_vi: 'Cô ấy có một lối sống rất lành mạnh.' },
            { word: 'nomadic', ipa: '/nəʊˈmædɪk/', pos: 'adj', meaning_vi: 'du mục', example_en: 'Some ethnic groups have a nomadic lifestyle.', example_vi: 'Một số dân tộc có lối sống du mục.' },
            { word: 'sedentary', ipa: '/ˈsedntri/', pos: 'adj', meaning_vi: 'ít vận động', example_en: 'A sedentary lifestyle is bad for your health.', example_vi: 'Lối sống ít vận động có hại cho sức khỏe của bạn.' },
            { word: 'sustainable', ipa: '/səˈsteɪnəbl/', pos: 'adj', meaning_vi: 'bền vững', example_en: 'We should aim for a sustainable lifestyle.', example_vi: 'Chúng ta nên hướng tới một lối sống bền vững.' },
            { word: 'habit', ipa: '/ˈhæbɪt/', pos: 'n', meaning_vi: 'thói quen', example_en: 'Smoking is a bad habit.', example_vi: 'Hút thuốc là một thói quen xấu.' },
            { word: 'routine', ipa: '/ruːˈtiːn/', pos: 'n', meaning_vi: 'thói quen hàng ngày', example_en: 'My daily routine starts at 6 AM.', example_vi: 'Thói quen hàng ngày của tôi bắt đầu lúc 6 giờ sáng.' },
            { word: 'socialize', ipa: '/ˈsəʊʃəlaɪz/', pos: 'v', meaning_vi: 'giao lưu', example_en: 'It\'s important to socialize with your neighbors.', example_vi: 'Giao lưu với hàng xóm là điều quan trọng.' },
            { word: 'balance', ipa: '/ˈbæləns/', pos: 'v/n', meaning_vi: 'cân bằng', example_en: 'You need to balance work and play.', example_vi: 'Bạn cần cân bằng giữa công việc và vui chơi.' },
            { word: 'stressful', ipa: '/ˈstresfl/', pos: 'adj', meaning_vi: 'căng thẳng', example_en: 'Living in a big city can be stressful.', example_vi: 'Sống ở một thành phố lớn có thể rất căng thẳng.' },
            { word: 'simple', ipa: '/ˈsɪmpl/', pos: 'adj', meaning_vi: 'đơn giản', example_en: 'I prefer a simple life in the countryside.', example_vi: 'Tôi thích một cuộc sống đơn giản ở nông thôn.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Conditional Sentences Type 1',
          order: 2,
          objectives: ['Sử dụng câu điều kiện loại 1'],
          type: 'grammar',
          grammar: {
            title: 'Conditional Sentences Type 1',
            content: `
### Câu điều kiện loại 1 (First Conditional)
- **Cách dùng:** Diễn tả một điều kiện có thể xảy ra ở hiện tại hoặc tương lai và kết quả của nó.
- **Cấu trúc:**
  - **If-clause (Mệnh đề điều kiện):** If + S + V(hiện tại đơn)
  - **Main clause (Mệnh đề chính):** S + will/can/may + V(nguyên thể)
- **Ví dụ:**
  - If it **rains** tomorrow, we **will stay** at home. (Nếu ngày mai trời mưa, chúng tôi sẽ ở nhà.)
  - If you **study** hard, you **will pass** the exam. (Nếu bạn học chăm chỉ, bạn sẽ vượt qua kỳ thi.)
- **Lưu ý:** Mệnh đề If có thể đứng trước hoặc sau mệnh đề chính. Nếu đứng trước, phải có dấu phẩy ngăn cách.
  - We will stay at home if it rains tomorrow.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - A Healthy Lifestyle',
          order: 3,
          objectives: ['Đọc hiểu về lối sống lành mạnh'],
          type: 'reading',
          reading: {
            title: 'A Healthy Lifestyle',
            passage: 'Having a healthy lifestyle is very important for everyone. If you want to be healthy, you need to eat a balanced diet. This means eating plenty of fruits, vegetables, and whole grains, and avoiding too much sugar and fast food. Exercise is also crucial. You should try to do at least 30 minutes of physical activity every day, such as walking, swimming, or playing sports. Getting enough sleep is another key factor. Teenagers need about 8 to 10 hours of sleep per night to function well. Finally, managing stress is essential. If you feel stressed, you can try relaxing activities like reading, listening to music, or talking to a friend.',
            questions: [
              { question: 'What does a balanced diet include?', options: ['Only fast food', 'Plenty of fruits, vegetables, and whole grains', 'A lot of sugar'], answer: 'Plenty of fruits, vegetables, and whole grains' },
              { question: 'How much physical activity should you do every day?', options: ['At least 30 minutes', '5 minutes', '2 hours'], answer: 'At least 30 minutes' },
              { question: 'How many hours of sleep do teenagers need?', options: ['5 to 6 hours', '8 to 10 hours', '12 hours'], answer: '8 to 10 hours' },
              { question: 'What is a good way to manage stress?', options: ['Eating fast food', 'Listening to music or talking to a friend', 'Staying up late'], answer: 'Listening to music or talking to a friend' },
              { question: 'What will happen if you follow these tips?', options: ['You will be tired', 'You will have a healthy lifestyle', 'You will be stressed'], answer: 'You will have a healthy lifestyle' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit7',
      title: 'Unit 7: Environmental Protection',
      order: 7,
      description: 'Từ vựng về bảo vệ môi trường. Ngữ pháp: Câu phức với mệnh đề trạng ngữ chỉ thời gian.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Environment',
          order: 1,
          objectives: ['Từ vựng về ô nhiễm và bảo vệ môi trường'],
          type: 'vocabulary',
          words: [
            { word: 'pollution', ipa: '/pəˈluːʃn/', pos: 'n', meaning_vi: 'sự ô nhiễm', example_en: 'Air pollution is a serious problem.', example_vi: 'Ô nhiễm không khí là một vấn đề nghiêm trọng.' },
            { word: 'preserve', ipa: '/prɪˈzɜːv/', pos: 'v', meaning_vi: 'bảo tồn', example_en: 'We must preserve our natural resources.', example_vi: 'Chúng ta phải bảo tồn tài nguyên thiên nhiên.' },
            { word: 'recycle', ipa: '/ˌriːˈsaɪkl/', pos: 'v', meaning_vi: 'tái chế', example_en: 'Recycling paper helps save trees.', example_vi: 'Tái chế giấy giúp cứu cây xanh.' },
            { word: 'environment', ipa: '/ɪnˈvaɪrənmənt/', pos: 'n', meaning_vi: 'môi trường', example_en: 'We should protect the environment.', example_vi: 'Chúng ta nên bảo vệ môi trường.' },
            { word: 'wildlife', ipa: '/ˈwaɪldlaɪf/', pos: 'n', meaning_vi: 'động vật hoang dã', example_en: 'The park is home to many wildlife species.', example_vi: 'Công viên là nơi sinh sống của nhiều loài động vật hoang dã.' },
            { word: 'endangered', ipa: '/ɪnˈdeɪndʒəd/', pos: 'adj', meaning_vi: 'có nguy cơ tuyệt chủng', example_en: 'Pandas are an endangered species.', example_vi: 'Gấu trúc là một loài có nguy cơ tuyệt chủng.' },
            { word: 'deforestation', ipa: '/ˌdiːˌfɒrɪˈsteɪʃn/', pos: 'n', meaning_vi: 'sự phá rừng', example_en: 'Deforestation leads to global warming.', example_vi: 'Phá rừng dẫn đến sự nóng lên toàn cầu.' },
            { word: 'global warming', ipa: '/ˌɡləʊbl ˈwɔːmɪŋ/', pos: 'n', meaning_vi: 'sự nóng lên toàn cầu', example_en: 'Global warming is affecting the climate.', example_vi: 'Sự nóng lên toàn cầu đang ảnh hưởng đến khí hậu.' },
            { word: 'eco-friendly', ipa: '/ˌiːkəʊ ˈfrendli/', pos: 'adj', meaning_vi: 'thân thiện với môi trường', example_en: 'Use eco-friendly products to protect nature.', example_vi: 'Sử dụng các sản phẩm thân thiện với môi trường để bảo vệ thiên nhiên.' },
            { word: 'biodiversity', ipa: '/ˌbaɪəʊdaɪˈvɜːsəti/', pos: 'n', meaning_vi: 'đa dạng sinh học', example_en: 'The forest has rich biodiversity.', example_vi: 'Khu rừng có sự đa dạng sinh học phong phú.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Complex sentences with time clauses',
          order: 2,
          objectives: ['Sử dụng câu phức với mệnh đề trạng ngữ chỉ thời gian'],
          type: 'grammar',
          grammar: {
            title: 'Complex sentences with time clauses',
            content: `
### Câu phức với mệnh đề trạng ngữ chỉ thời gian
- **Cách dùng:** Dùng để chỉ thời gian xảy ra hành động trong mệnh đề chính.
- **Các liên từ chỉ thời gian phổ biến:** when (khi), while (trong khi), before (trước khi), after (sau khi), as soon as (ngay khi), until/till (cho đến khi).
- **Cấu trúc:**
  - Liên từ + S1 + V1, S2 + V2
  - S2 + V2 + Liên từ + S1 + V1
- **Ví dụ:**
  - **When** I arrived, they were having dinner. (Khi tôi đến, họ đang ăn tối.)
  - I will call you **as soon as** I finish my homework. (Tôi sẽ gọi cho bạn ngay khi tôi làm xong bài tập.)
  - Please turn off the lights **before** you leave. (Vui lòng tắt đèn trước khi bạn rời đi.)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Saving Our Planet',
          order: 3,
          objectives: ['Đọc hiểu về bảo vệ môi trường'],
          type: 'reading',
          reading: {
            title: 'Saving Our Planet',
            passage: 'Our planet is facing many environmental problems, such as pollution, global warming, and deforestation. However, there are many simple things we can do to help protect the environment. First, we should reduce, reuse, and recycle. By recycling paper, plastic, and glass, we can reduce the amount of waste that goes to landfills. Second, we can save energy by turning off lights and unplugging electronics when we are not using them. Third, planting trees is a great way to improve air quality and provide habitats for wildlife. Finally, using public transportation, walking, or cycling instead of driving cars can help reduce air pollution. If everyone makes a small effort, we can make a big difference.',
            questions: [
              { question: 'What are some environmental problems mentioned?', options: ['Pollution and global warming', 'Too many animals', 'Heavy rain'], answer: 'Pollution and global warming' },
              { question: 'What does "reduce, reuse, and recycle" help with?', options: ['Increasing waste', 'Reducing waste in landfills', 'Making more plastic'], answer: 'Reducing waste in landfills' },
              { question: 'How can we save energy?', options: ['By leaving lights on', 'By turning off lights when not in use', 'By buying more electronics'], answer: 'By turning off lights when not in use' },
              { question: 'Why is planting trees good?', options: ['It improves air quality', 'It makes the streets darker', 'It causes allergies'], answer: 'It improves air quality' },
              { question: 'What is a good alternative to driving cars?', options: ['Flying', 'Using public transportation, walking, or cycling', 'Taking a taxi'], answer: 'Using public transportation, walking, or cycling' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit8',
      title: 'Unit 8: Shopping',
      order: 8,
      description: 'Từ vựng về mua sắm. Ngữ pháp: Các trạng từ chỉ tần suất (ôn tập), Thì hiện tại đơn cho các sự kiện trong tương lai.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Shopping',
          order: 1,
          objectives: ['Từ vựng về các loại cửa hàng và hoạt động mua sắm'],
          type: 'vocabulary',
          words: [
            { word: 'shopping mall', ipa: '/ˈʃɒpɪŋ mɔːl/', pos: 'n', meaning_vi: 'trung tâm thương mại', example_en: 'I like going to the shopping mall on weekends.', example_vi: 'Tôi thích đi trung tâm thương mại vào cuối tuần.' },
            { word: 'supermarket', ipa: '/ˈsuːpəmɑːkɪt/', pos: 'n', meaning_vi: 'siêu thị', example_en: 'We buy groceries at the supermarket.', example_vi: 'Chúng tôi mua thực phẩm ở siêu thị.' },
            { word: 'convenience store', ipa: '/kənˈviːniəns stɔː(r)/', pos: 'n', meaning_vi: 'cửa hàng tiện lợi', example_en: 'The convenience store is open 24/7.', example_vi: 'Cửa hàng tiện lợi mở cửa 24/7.' },
            { word: 'discount', ipa: '/ˈdɪskaʊnt/', pos: 'n', meaning_vi: 'sự giảm giá', example_en: 'There is a 20% discount on all items.', example_vi: 'Có mức giảm giá 20% cho tất cả các mặt hàng.' },
            { word: 'bargain', ipa: '/ˈbɑːɡən/', pos: 'v/n', meaning_vi: 'mặc cả/món hời', example_en: 'She is good at bargaining.', example_vi: 'Cô ấy rất giỏi mặc cả.' },
            { word: 'online shopping', ipa: '/ˌɒnlaɪ ˈʃɒpɪŋ/', pos: 'n', meaning_vi: 'mua sắm trực tuyến', example_en: 'Online shopping is very popular nowadays.', example_vi: 'Mua sắm trực tuyến rất phổ biến hiện nay.' },
            { word: 'customer', ipa: '/ˈkʌstəmə(r)/', pos: 'n', meaning_vi: 'khách hàng', example_en: 'The customer is always right.', example_vi: 'Khách hàng luôn đúng.' },
            { word: 'receipt', ipa: '/rɪˈsiːt/', pos: 'n', meaning_vi: 'hóa đơn', example_en: 'Keep your receipt in case you want to return the item.', example_vi: 'Giữ hóa đơn phòng khi bạn muốn trả lại hàng.' },
            { word: 'price tag', ipa: '/ˈpraɪs tæɡ/', pos: 'n', meaning_vi: 'nhãn giá', example_en: 'Check the price tag before buying.', example_vi: 'Kiểm tra nhãn giá trước khi mua.' },
            { word: 'expensive', ipa: '/ɪkˈspensɪv/', pos: 'adj', meaning_vi: 'đắt tiền', example_en: 'This watch is too expensive.', example_vi: 'Chiếc đồng hồ này quá đắt.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Adverbs of frequency & Present simple for future',
          order: 2,
          objectives: ['Ôn tập trạng từ chỉ tần suất và thì hiện tại đơn mang nghĩa tương lai'],
          type: 'grammar',
          grammar: {
            title: 'Adverbs of frequency & Present simple for future',
            content: `
### 1. Trạng từ chỉ tần suất (Adverbs of frequency)
- **Cách dùng:** Diễn tả mức độ thường xuyên của hành động.
- **Các từ phổ biến:** always (luôn luôn), usually (thường xuyên), often (thường), sometimes (thỉnh thoảng), rarely (hiếm khi), never (không bao giờ).
- **Vị trí:** Đứng trước động từ thường, sau động từ "to be".
  - Ví dụ: I **usually go** shopping on Sundays. / She **is always** late.

### 2. Thì hiện tại đơn mang nghĩa tương lai
- **Cách dùng:** Dùng để nói về các sự kiện trong tương lai đã được lên lịch trình sẵn (như lịch tàu xe, lịch chiếu phim, thời khóa biểu).
- **Ví dụ:**
  - The train **leaves** at 8 AM tomorrow. (Chuyến tàu khởi hành lúc 8 giờ sáng mai.)
  - The film **starts** at 7 PM tonight. (Bộ phim bắt đầu lúc 7 giờ tối nay.)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Shopping Habits',
          order: 3,
          objectives: ['Đọc hiểu về thói quen mua sắm'],
          type: 'reading',
          reading: {
            title: 'Shopping Habits',
            passage: 'Shopping habits have changed significantly in recent years. In the past, people usually went to traditional markets or small shops to buy what they needed. Today, many people prefer going to large shopping malls or supermarkets because they offer a wide variety of products in one place. Moreover, online shopping has become extremely popular. With just a few clicks, you can buy almost anything and have it delivered to your door. Online shopping is convenient, especially for busy people. However, some people still enjoy traditional shopping because they like to see and touch the products before buying them, and they enjoy the social interaction with shop assistants.',
            questions: [
              { question: 'Where did people usually shop in the past?', options: ['Online', 'Traditional markets or small shops', 'Shopping malls'], answer: 'Traditional markets or small shops' },
              { question: 'Why do people like shopping malls?', options: ['Because they are small', 'Because they offer a wide variety of products', 'Because they are cheap'], answer: 'Because they offer a wide variety of products' },
              { question: 'What is a benefit of online shopping?', options: ['It is convenient', 'You can touch the products', 'You can talk to shop assistants'], answer: 'It is convenient' },
              { question: 'Why do some people still enjoy traditional shopping?', options: ['Because it is faster', 'Because they like to see and touch products', 'Because they hate computers'], answer: 'Because they like to see and touch products' },
              { question: 'What has become extremely popular recently?', options: ['Traditional markets', 'Online shopping', 'Small shops'], answer: 'Online shopping' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit9',
      title: 'Unit 9: Natural Disasters',
      order: 9,
      description: 'Từ vựng về thiên tai. Ngữ pháp: Câu điều kiện loại 2.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Natural disasters',
          order: 1,
          objectives: ['Từ vựng về các loại thiên tai và hậu quả'],
          type: 'vocabulary',
          words: [
            { word: 'earthquake', ipa: '/ˈɜːθkweɪk/', pos: 'n', meaning_vi: 'động đất', example_en: 'The earthquake destroyed many buildings.', example_vi: 'Trận động đất đã phá hủy nhiều tòa nhà.' },
            { word: 'flood', ipa: '/flʌd/', pos: 'n', meaning_vi: 'lũ lụt', example_en: 'The heavy rain caused a flood.', example_vi: 'Mưa lớn đã gây ra lũ lụt.' },
            { word: 'tsunami', ipa: '/tsuːˈnɑːmi/', pos: 'n', meaning_vi: 'sóng thần', example_en: 'A tsunami can be very dangerous.', example_vi: 'Sóng thần có thể rất nguy hiểm.' },
            { word: 'volcano', ipa: '/vɒlˈkeɪnəʊ/', pos: 'n', meaning_vi: 'núi lửa', example_en: 'The volcano erupted yesterday.', example_vi: 'Núi lửa đã phun trào ngày hôm qua.' },
            { word: 'drought', ipa: '/draʊt/', pos: 'n', meaning_vi: 'hạn hán', example_en: 'The long drought affected the crops.', example_vi: 'Hạn hán kéo dài đã ảnh hưởng đến mùa màng.' },
            { word: 'landslide', ipa: '/ˈlændslaɪd/', pos: 'n', meaning_vi: 'sạt lở đất', example_en: 'The landslide blocked the road.', example_vi: 'Sạt lở đất đã chặn con đường.' },
            { word: 'hurricane', ipa: '/ˈhʌrɪkən/', pos: 'n', meaning_vi: 'bão lớn', example_en: 'The hurricane hit the coast last night.', example_vi: 'Cơn bão lớn đã đổ bộ vào bờ biển đêm qua.' },
            { word: 'rescue', ipa: '/ˈreskjuː/', pos: 'v/n', meaning_vi: 'cứu hộ', example_en: 'The rescue team arrived quickly.', example_vi: 'Đội cứu hộ đã đến nhanh chóng.' },
            { word: 'survivor', ipa: '/səˈvaɪvə(r)/', pos: 'n', meaning_vi: 'người sống sót', example_en: 'There were few survivors of the crash.', example_vi: 'Có rất ít người sống sót sau vụ va chạm.' },
            { word: 'damage', ipa: '/ˈdæmɪdʒ/', pos: 'v/n', meaning_vi: 'thiệt hại', example_en: 'The storm caused a lot of damage.', example_vi: 'Cơn bão đã gây ra rất nhiều thiệt hại.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Conditional Sentences Type 2',
          order: 2,
          objectives: ['Sử dụng câu điều kiện loại 2'],
          type: 'grammar',
          grammar: {
            title: 'Conditional Sentences Type 2',
            content: `
### Câu điều kiện loại 2 (Second Conditional)
- **Cách dùng:** Diễn tả một điều kiện không có thật ở hiện tại hoặc tương lai, và kết quả tưởng tượng của nó.
- **Cấu trúc:**
  - **If-clause (Mệnh đề điều kiện):** If + S + V(quá khứ đơn)
  - **Main clause (Mệnh đề chính):** S + would/could/might + V(nguyên thể)
- **Lưu ý:** Động từ "to be" thường được dùng là "were" cho tất cả các ngôi trong mệnh đề If.
- **Ví dụ:**
  - If I **were** you, I **would buy** that house. (Nếu tôi là bạn, tôi sẽ mua ngôi nhà đó.)
  - If we **had** more money, we **could travel** around the world. (Nếu chúng tôi có nhiều tiền hơn, chúng tôi có thể đi du lịch vòng quanh thế giới.)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Surviving an Earthquake',
          order: 3,
          objectives: ['Đọc hiểu về cách sinh tồn khi có động đất'],
          type: 'reading',
          reading: {
            title: 'Surviving an Earthquake',
            passage: 'Earthquakes can happen suddenly and cause a lot of damage. Knowing what to do during an earthquake can save your life. If you are indoors when an earthquake strikes, drop to the ground, take cover under a sturdy table or desk, and hold on until the shaking stops. Stay away from windows, glass, and anything that could fall on you. Do not use the elevators. If you are outdoors, move to a clear area away from buildings, trees, and power lines. If you are in a car, pull over to a safe place and stay inside. After the earthquake, be prepared for aftershocks and listen to the radio for emergency information.',
            questions: [
              { question: 'What should you do if you are indoors during an earthquake?', options: ['Run outside', 'Take cover under a sturdy table', 'Stand near a window'], answer: 'Take cover under a sturdy table' },
              { question: 'What should you stay away from indoors?', options: ['Sturdy tables', 'Windows and glass', 'The floor'], answer: 'Windows and glass' },
              { question: 'Should you use the elevator during an earthquake?', options: ['Yes, it is fast', 'No, do not use elevators', 'Only if you are on a high floor'], answer: 'No, do not use elevators' },
              { question: 'What should you do if you are outdoors?', options: ['Stand under a tree', 'Move to a clear area', 'Run into a building'], answer: 'Move to a clear area' },
              { question: 'What should you be prepared for after the earthquake?', options: ['A party', 'Aftershocks', 'A flood'], answer: 'Aftershocks' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit10',
      title: 'Unit 10: Communication in the Future',
      order: 10,
      description: 'Từ vựng về giao tiếp tương lai. Ngữ pháp: Câu gián tiếp (ôn tập), Đại từ sở hữu (ôn tập).',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Future communication',
          order: 1,
          objectives: ['Từ vựng về các phương thức giao tiếp hiện đại'],
          type: 'vocabulary',
          words: [
            { word: 'video call', ipa: '/ˈvɪdiəʊ kɔːl/', pos: 'n', meaning_vi: 'cuộc gọi video', example_en: 'I had a video call with my friend.', example_vi: 'Tôi đã có một cuộc gọi video với bạn mình.' },
            { word: 'social media', ipa: '/ˌsəʊʃl ˈmiːdiə/', pos: 'n', meaning_vi: 'mạng xã hội', example_en: 'Facebook is a popular social media platform.', example_vi: 'Facebook là một nền tảng mạng xã hội phổ biến.' },
            { word: 'hologram', ipa: '/ˈhɒləɡræm/', pos: 'n', meaning_vi: 'hình ảnh ba chiều', example_en: 'We will use holograms to communicate in the future.', example_vi: 'Chúng ta sẽ sử dụng hình ảnh ba chiều để giao tiếp trong tương lai.' },
            { word: 'telepathy', ipa: '/təˈlepəθi/', pos: 'n', meaning_vi: 'thần giao cách cảm', example_en: 'Is telepathy possible between humans?', example_vi: 'Liệu thần giao cách cảm có khả thi giữa con người không?' },
            { word: 'instantly', ipa: '/ˈɪnstəntli/', pos: 'adv', meaning_vi: 'ngay lập tức', example_en: 'Messages are sent instantly.', example_vi: 'Tin nhắn được gửi đi ngay lập tức.' },
            { word: 'interact', ipa: '/ˌɪntərˈækt/', pos: 'v', meaning_vi: 'tương tác', example_en: 'Students should interact more in class.', example_vi: 'Học sinh nên tương tác nhiều hơn trong lớp.' },
            { word: 'barrier', ipa: '/ˈbæriə(r)/', pos: 'n', meaning_vi: 'rào cản', example_en: 'Language can be a barrier to communication.', example_vi: 'Ngôn ngữ có thể là một rào cản trong giao tiếp.' },
            { word: 'digital', ipa: '/ˈdɪdʒɪtl/', pos: 'adj', meaning_vi: 'kỹ thuật số', example_en: 'We live in a digital age.', example_vi: 'Chúng ta sống trong thời đại kỹ thuật số.' },
            { word: 'connect', ipa: '/kəˈnekt/', pos: 'v', meaning_vi: 'kết nối', example_en: 'The internet connects people around the world.', example_vi: 'Internet kết nối mọi người trên toàn thế giới.' },
            { word: 'device', ipa: '/dɪˈvaɪs/', pos: 'n', meaning_vi: 'thiết bị', example_en: 'A smartphone is a useful device.', example_vi: 'Điện thoại thông minh là một thiết bị hữu ích.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Reported Speech & Possessive Pronouns',
          order: 2,
          objectives: ['Ôn tập câu gián tiếp và đại từ sở hữu'],
          type: 'grammar',
          grammar: {
            title: 'Reported Speech & Possessive Pronouns',
            content: `
### 1. Câu gián tiếp (Reported Speech) - Ôn tập
- **Cách dùng:** Dùng để thuật lại lời nói của người khác.
- **Quy tắc lùi thì:** Hiện tại đơn -> Quá khứ đơn, Hiện tại tiếp diễn -> Quá khứ tiếp diễn, Tương lai đơn (will) -> would...
- **Đổi đại từ và trạng từ:** I -> he/she, my -> his/her, here -> there, now -> then, tomorrow -> the next day...
- **Ví dụ:**
  - Trực tiếp: "I **will call** you **tomorrow**," he said.
  - Gián tiếp: He said that he **would call** me **the next day**.

### 2. Đại từ sở hữu (Possessive Pronouns)
- **Cách dùng:** Dùng để thay thế cho tính từ sở hữu + danh từ (để tránh lặp từ).
- **Các đại từ sở hữu:** mine, yours, his, hers, ours, theirs.
- **Ví dụ:**
  - This is my book. That book is **yours** (= your book).
  - Their house is big, but **ours** (= our house) is small.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Communication in 2050',
          order: 3,
          objectives: ['Đọc hiểu về giao tiếp trong tương lai'],
          type: 'reading',
          reading: {
            title: 'Communication in 2050',
            passage: "By the year 2050, the way we communicate will be very different from today. Smartphones might disappear. Instead, people may use smart glasses or contact lenses that project holograms. We will be able to have 3D video calls, making it feel like the person is right in front of us. Language barriers might also become a thing of the past. Real-time translation devices will be so advanced that we can speak to anyone in the world in our own language, and they will hear it in theirs. Some scientists even believe that brain-to-brain communication, or telepathy, could be possible, allowing us to send thoughts directly to another person's mind.",
            questions: [
              { question: 'What might disappear by 2050?', options: ['Smartphones', 'Smart glasses', 'Contact lenses'], answer: 'Smartphones' },
              { question: 'What will smart glasses project?', options: ['Movies', 'Holograms', 'Books'], answer: 'Holograms' },
              { question: 'How will 3D video calls feel?', options: ['Like watching TV', 'Like the person is right in front of us', 'Like listening to the radio'], answer: 'Like the person is right in front of us' },
              { question: 'What will help overcome language barriers?', options: ['Learning many languages', 'Real-time translation devices', 'Using sign language'], answer: 'Real-time translation devices' },
              { question: 'What is brain-to-brain communication also called?', options: ['Telepathy', 'Hologram', 'Translation'], answer: 'Telepathy' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit11',
      title: 'Unit 11: Science and Technology',
      order: 11,
      description: 'Từ vựng về khoa học và công nghệ. Ngữ pháp: Câu gián tiếp (tiếp theo).',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Science and Tech',
          order: 1,
          objectives: ['Từ vựng về các phát minh và tiến bộ khoa học'],
          type: 'vocabulary',
          words: [
            { word: 'invention', ipa: '/ɪnˈvenʃn/', pos: 'n', meaning_vi: 'phát minh', example_en: 'The light bulb was a great invention.', example_vi: 'Bóng đèn là một phát minh vĩ đại.' },
            { word: 'discovery', ipa: '/dɪˈskʌvəri/', pos: 'n', meaning_vi: 'sự khám phá', example_en: 'The discovery of penicillin saved many lives.', example_vi: 'Sự khám phá ra penicillin đã cứu sống nhiều người.' },
            { word: 'robotics', ipa: '/rəʊˈbɒtɪks/', pos: 'n', meaning_vi: 'rô-bốt học', example_en: 'He is interested in robotics.', example_vi: 'Anh ấy quan tâm đến rô-bốt học.' },
            { word: 'artificial intelligence', ipa: '/ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/', pos: 'n', meaning_vi: 'trí tuệ nhân tạo', example_en: 'AI is changing the world.', example_vi: 'AI đang thay đổi thế giới.' },
            { word: 'experiment', ipa: '/ɪkˈsperɪmənt/', pos: 'n/v', meaning_vi: 'thí nghiệm', example_en: 'They are conducting an experiment in the lab.', example_vi: 'Họ đang tiến hành một thí nghiệm trong phòng phòng thí nghiệm.' },
            { word: 'breakthrough', ipa: '/ˈbreɪkθruː/', pos: 'n', meaning_vi: 'bước đột phá', example_en: 'Scientists have made a major breakthrough.', example_vi: 'Các nhà khoa học đã tạo ra một bước đột phá lớn.' },
            { word: 'technique', ipa: '/tekˈniːk/', pos: 'n', meaning_vi: 'kỹ thuật', example_en: 'He used a new technique to solve the problem.', example_vi: 'Anh ấy đã sử dụng một kỹ thuật mới để giải quyết vấn đề.' },
            { word: 'precise', ipa: '/prɪˈsaɪs/', pos: 'adj', meaning_vi: 'chính xác', example_en: 'The measurements must be precise.', example_vi: 'Các phép đo phải chính xác.' },
            { word: 'efficient', ipa: '/ɪˈfɪʃnt/', pos: 'adj', meaning_vi: 'hiệu quả', example_en: 'The new engine is more efficient.', example_vi: 'Động cơ mới hiệu quả hơn.' },
            { word: 'transform', ipa: '/trænsˈfɔːm/', pos: 'v', meaning_vi: 'biến đổi', example_en: 'Technology has transformed our lives.', example_vi: 'Công nghệ đã biến đổi cuộc sống của chúng ta.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Reported Speech (Questions)',
          order: 2,
          objectives: ['Sử dụng câu gián tiếp dạng câu hỏi'],
          type: 'grammar',
          grammar: {
            title: 'Reported Speech (Questions)',
            content: `
### Câu gián tiếp dạng câu hỏi (Reported Questions)
- **Cấu trúc chung:** S + asked/wanted to know/wondered + ...
- **1. Câu hỏi Yes/No (Yes/No questions):**
  - Dùng "if" hoặc "whether".
  - Cấu trúc: S + asked + (O) + if/whether + S + V(lùi thì)
  - Ví dụ: "Do you like robots?" she asked. -> She asked me **if I liked** robots.
- **2. Câu hỏi có từ để hỏi (Wh-questions):**
  - Giữ nguyên từ để hỏi (What, Where, When...).
  - Cấu trúc: S + asked + (O) + Wh-word + S + V(lùi thì)
  - Ví dụ: "Where are you going?" he asked. -> He asked me **where I was going**.
- **Lưu ý:** Trong câu gián tiếp, trật tự từ trở về dạng khẳng định (S + V), không đảo trợ động từ lên trước chủ ngữ.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - The Impact of AI',
          order: 3,
          objectives: ['Đọc hiểu về tác động của trí tuệ nhân tạo'],
          type: 'reading',
          reading: {
            title: 'The Impact of AI',
            passage: 'Artificial Intelligence (AI) is rapidly changing the world. AI systems are now capable of performing tasks that normally require human intelligence, such as recognizing speech, making decisions, and translating languages. In healthcare, AI helps doctors diagnose diseases more accurately and quickly. In transportation, self-driving cars powered by AI could reduce accidents and traffic jams. However, the rise of AI also brings challenges. Many people worry that robots and AI will replace human workers, leading to job losses. There are also concerns about privacy and security. Therefore, it is important to develop and use AI responsibly to ensure it benefits society.',
            questions: [
              { question: 'What can AI systems do?', options: ['Only play games', 'Perform tasks that require human intelligence', 'Only translate languages'], answer: 'Perform tasks that require human intelligence' },
              { question: 'How does AI help in healthcare?', options: ['It cleans hospitals', 'It helps doctors diagnose diseases', 'It drives ambulances'], answer: 'It helps doctors diagnose diseases' },
              { question: 'What is a potential benefit of self-driving cars?', options: ['Reducing accidents and traffic jams', 'Making cars more expensive', 'Causing more pollution'], answer: 'Reducing accidents and traffic jams' },
              { question: 'What is a major concern about AI?', options: ['It is too slow', 'It will replace human workers', 'It cannot learn'], answer: 'It will replace human workers' },
              { question: 'How should we develop and use AI?', options: ['Carelessly', 'Responsibly', 'Secretly'], answer: 'Responsibly' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit12',
      title: 'Unit 12: Life on Other Planets',
      order: 12,
      description: 'Từ vựng về vũ trụ và sự sống ngoài hành tinh. Ngữ pháp: May và Might, Câu hỏi đuôi.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Space',
          order: 1,
          objectives: ['Từ vựng về các hành tinh và thám hiểm vũ trụ'],
          type: 'vocabulary',
          words: [
            { word: 'planet', ipa: '/ˈplænɪt/', pos: 'n', meaning_vi: 'hành tinh', example_en: 'Mars is known as the Red Planet.', example_vi: 'Sao Hỏa được biết đến là Hành tinh Đỏ.' },
            { word: 'alien', ipa: '/ˈeɪliən/', pos: 'n', meaning_vi: 'người ngoài hành tinh', example_en: 'Do you believe in aliens?', example_vi: 'Bạn có tin vào người ngoài hành tinh không?' },
            { word: 'galaxy', ipa: '/ˈɡæləksi/', pos: 'n', meaning_vi: 'thiên hà', example_en: 'Our galaxy is called the Milky Way.', example_vi: 'Thiên hà của chúng ta được gọi là Ngân Hà.' },
            { word: 'astronaut', ipa: '/ˈæstrənɔːt/', pos: 'n', meaning_vi: 'phi hành gia', example_en: 'He dreams of becoming an astronaut.', example_vi: 'Anh ấy mơ ước trở thành phi hành gia.' },
            { word: 'solar system', ipa: '/ˈsəʊlə ˈsɪstəm/', pos: 'n', meaning_vi: 'hệ mặt trời', example_en: 'There are eight planets in our solar system.', example_vi: 'Có tám hành tinh trong hệ mặt trời của chúng ta.' },
            { word: 'orbit', ipa: '/ˈɔːbɪt/', pos: 'v/n', meaning_vi: 'quỹ đạo/đi theo quỹ đạo', example_en: 'The Earth orbits the Sun.', example_vi: 'Trái Đất quay quanh Mặt Trời.' },
            { word: 'gravity', ipa: '/ˈɡrævəti/', pos: 'n', meaning_vi: 'trọng lực', example_en: 'There is no gravity in space.', example_vi: 'Không có trọng lực trong không gian.' },
            { word: 'habitable', ipa: '/ˈhæbɪtəbl/', pos: 'adj', meaning_vi: 'có thể ở được', example_en: 'Is Mars habitable for humans?', example_vi: 'Liệu sao Hỏa có thể ở được cho con người không?' },
            { word: 'unidentified', ipa: '/ˌʌnaɪˈdentɪfaɪd/', pos: 'adj', meaning_vi: 'không xác định', example_en: 'They saw an unidentified flying object.', example_vi: 'Họ đã thấy một vật thể bay không xác định.' },
            { word: 'exploration', ipa: '/ˌekspləˈreɪʃn/', pos: 'n', meaning_vi: 'sự thám hiểm', example_en: 'Space exploration is very expensive.', example_vi: 'Thám hiểm không gian rất tốn kém.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - May/Might & Tag questions',
          order: 2,
          objectives: ['Sử dụng May/Might và Câu hỏi đuôi'],
          type: 'grammar',
          grammar: {
            title: 'May/Might & Tag questions',
            content: `
### 1. May và Might (Có thể)
- **Cách dùng:** Dùng để diễn tả một khả năng có thể xảy ra ở hiện tại hoặc tương lai. "Might" thường diễn tả khả năng thấp hơn "May".
- **Cấu trúc:** S + may/might + V(nguyên thể)
- **Ví dụ:**
  - It **may rain** tomorrow. (Ngày mai trời có thể mưa.)
  - Aliens **might exist** on other planets. (Người ngoài hành tinh có thể tồn tại trên các hành tinh khác.)

### 2. Câu hỏi đuôi (Tag questions)
- **Cách dùng:** Dùng để xác nhận lại thông tin.
- **Cấu trúc:** Câu trần thuật, + phần đuôi?
  - Nếu câu trần thuật ở thể khẳng định, phần đuôi ở thể phủ định.
  - Nếu câu trần thuật ở thể phủ định, phần đuôi ở thể khẳng định.
- **Ví dụ:**
  - You are a student, **aren't you**?
  - He didn't go to school, **did he**?
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Life on Mars',
          order: 3,
          objectives: ['Đọc hiểu về sự sống trên sao Hỏa'],
          type: 'reading',
          reading: {
            title: 'Life on Mars',
            passage: "For a long time, scientists have wondered if there is life on Mars. Mars is the fourth planet from the Sun and is often called the Red Planet. It has a very thin atmosphere and is extremely cold. However, scientists have found evidence that water once flowed on its surface. Water is essential for life as we know it. Today, several rovers are exploring Mars, taking pictures and analyzing the soil. They are looking for signs of past or present life, such as microbes. While we haven't found any aliens yet, the search continues. In the future, humans might even travel to Mars to explore it themselves.",
            questions: [
              { question: 'What is Mars often called?', options: ['The Blue Planet', 'The Red Planet', 'The Hot Planet'], answer: 'The Red Planet' },
              { question: 'What is the atmosphere on Mars like?', options: ['Very thick', 'Very thin', 'Just like Earth'], answer: 'Very thin' },
              { question: 'What evidence have scientists found on Mars?', options: ['Evidence of water', 'Evidence of plants', 'Evidence of animals'], answer: 'Evidence of water' },
              { question: 'What are rovers doing on Mars?', options: ['Building houses', 'Exploring and analyzing soil', 'Looking for gold'], answer: 'Exploring and analyzing soil' },
              { question: 'What might humans do in the future?', options: ['Travel to Mars', 'Destroy Mars', 'Move Mars'], answer: 'Travel to Mars' }
            ]
          }
        }
      ]
    }
  ]
};
