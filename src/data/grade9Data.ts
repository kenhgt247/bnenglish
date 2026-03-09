export const grade9Data = {
  grade: {
    id: 'grade9',
    name: 'Tiếng Anh Lớp 9 (Global Success)',
    order: 4
  },
  units: [
    {
      id: 'unit1',
      title: 'Unit 1: Local Community',
      order: 1,
      description: 'Từ vựng về cộng đồng địa phương. Ngữ pháp: Câu phức (Complex Sentences), Cụm động từ (Phrasal Verbs).',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Community services',
          order: 1,
          objectives: ['Từ vựng về các dịch vụ và hoạt động cộng đồng'],
          type: 'vocabulary',
          words: [
            { word: 'community', ipa: '/kəˈmjuːnəti/', pos: 'n', meaning_vi: 'cộng đồng', example_en: 'We should help our local community.', example_vi: 'Chúng ta nên giúp đỡ cộng đồng địa phương của mình.' },
            { word: 'artisan', ipa: '/ˌɑːtɪˈzæn/', pos: 'n', meaning_vi: 'thợ thủ công', example_en: 'The artisan is making a beautiful vase.', example_vi: 'Người thợ thủ công đang làm một chiếc bình đẹp.' },
            { word: 'handicraft', ipa: '/ˈhændikrɑːft/', pos: 'n', meaning_vi: 'đồ thủ công mỹ nghệ', example_en: 'Many tourists buy handicrafts as souvenirs.', example_vi: 'Nhiều khách du lịch mua đồ thủ công làm quà lưu niệm.' },
            { word: 'workshop', ipa: '/ˈwɜːkʃɒp/', pos: 'n', meaning_vi: 'xưởng, hội thảo', example_en: 'They are attending a pottery workshop.', example_vi: 'Họ đang tham gia một buổi xưởng làm gốm.' },
            { word: 'attraction', ipa: '/əˈtrækʃn/', pos: 'n', meaning_vi: 'điểm thu hút', example_en: 'The museum is a popular tourist attraction.', example_vi: 'Bảo tàng là một điểm thu hút khách du lịch phổ biến.' },
            { word: 'preserve', ipa: '/prɪˈzɜːv/', pos: 'v', meaning_vi: 'bảo tồn', example_en: 'We must preserve our traditional culture.', example_vi: 'Chúng ta phải bảo tồn văn hóa truyền thống của mình.' },
            { word: 'remind', ipa: '/rɪˈmaɪnd/', pos: 'v', meaning_vi: 'nhắc nhở', example_en: 'Remind me to call him tomorrow.', example_vi: 'Nhắc tôi gọi cho anh ấy vào ngày mai.' },
            { word: 'look after', ipa: '/lʊk ˈɑːftə(r)/', pos: 'v', meaning_vi: 'chăm sóc', example_en: 'She looks after her younger brother.', example_vi: 'Cô ấy chăm sóc em trai mình.' },
            { word: 'take over', ipa: '/teɪk ˈəʊvə(r)/', pos: 'v', meaning_vi: 'tiếp quản', example_en: 'He will take over the family business.', example_vi: 'Anh ấy sẽ tiếp quản công việc kinh doanh của gia đình.' },
            { word: 'set up', ipa: '/set ʌp/', pos: 'v', meaning_vi: 'thành lập, thiết lập', example_en: 'They set up a new club for teenagers.', example_vi: 'Họ đã thành lập một câu lạc bộ mới cho thanh thiếu niên.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Complex Sentences & Phrasal Verbs',
          order: 2,
          objectives: ['Sử dụng câu phức và cụm động từ'],
          type: 'grammar',
          grammar: {
            title: 'Complex Sentences & Phrasal Verbs',
            content: `
### 1. Câu phức (Complex Sentences)
- **Định nghĩa:** Là câu gồm một mệnh đề độc lập và ít nhất một mệnh đề phụ thuộc (thường bắt đầu bằng các liên từ phụ thuộc).
- **Các liên từ phụ thuộc phổ biến:**
  - **Thời gian:** when, while, as soon as, before, after...
  - **Lý do:** because, since, as...
  - **Nhượng bộ:** although, though, even though...
  - **Mục đích:** so that, in order that...
- **Ví dụ:** **Although** it was raining, we went out. / I will call you **as soon as** I arrive.

### 2. Cụm động từ (Phrasal Verbs)
- **Định nghĩa:** Là sự kết hợp giữa một động từ và một hoặc hai tiểu từ (giới từ hoặc trạng từ). Nghĩa của cụm động từ thường khác hoàn toàn với nghĩa của động từ gốc.
- **Ví dụ:**
  - **look after:** chăm sóc
  - **set up:** thành lập
  - **take off:** cất cánh (máy bay), cởi ra (quần áo)
  - **get on with:** hòa thuận với ai
  - **keep up with:** theo kịp ai/cái gì
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - A Traditional Craft Village',
          order: 3,
          objectives: ['Đọc hiểu về làng nghề truyền thống'],
          type: 'reading',
          reading: {
            title: 'Bat Trang Pottery Village',
            passage: 'Bat Trang is a famous pottery village located near Hanoi. It has a long history of making high-quality ceramics. Artisans in Bat Trang use traditional techniques to create beautiful vases, plates, and bowls. Many tourists visit the village to see how the pottery is made and even try making their own products in workshops. The village is not only a place of production but also a cultural attraction that helps preserve the traditional handicraft of Vietnam. Today, Bat Trang pottery is exported to many countries around the world, bringing fame and income to the local community.',
            questions: [
              { question: 'Where is Bat Trang Pottery Village located?', options: ['Near Hanoi', 'Near Da Nang', 'Near Ho Chi Minh City'], answer: 'Near Hanoi' },
              { question: 'What is Bat Trang famous for?', options: ['Making clothes', 'Making high-quality ceramics', 'Making furniture'], answer: 'Making high-quality ceramics' },
              { question: 'What can tourists do in the village?', options: ['Only buy pottery', 'See how pottery is made and try making it', 'Go swimming'], answer: 'See how pottery is made and try making it' },
              { question: 'What does the village help to preserve?', options: ['Traditional handicraft', 'Modern technology', 'Wild animals'], answer: 'Traditional handicraft' },
              { question: 'Is Bat Trang pottery exported?', options: ['No, it is only sold in Vietnam', 'Yes, it is exported to many countries', 'Not mentioned'], answer: 'Yes, it is exported to many countries' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit2',
      title: 'Unit 2: City Life',
      order: 2,
      description: 'Từ vựng về cuộc sống thành thị. Ngữ pháp: So sánh hơn và so sánh nhất của tính từ/trạng từ (ôn tập).',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - City life',
          order: 1,
          objectives: ['Từ vựng về các đặc điểm và vấn đề của thành phố'],
          type: 'vocabulary',
          words: [
            { word: 'metropolis', ipa: '/məˈtrɒpəlɪs/', pos: 'n', meaning_vi: 'đô thị lớn', example_en: 'New York is a huge metropolis.', example_vi: 'New York là một đô thị khổng lồ.' },
            { word: 'multicultural', ipa: '/ˌmʌltiˈkʌltʃərəl/', pos: 'adj', meaning_vi: 'đa văn hóa', example_en: 'London is a multicultural city.', example_vi: 'London là một thành phố đa văn hóa.' },
            { word: 'cosmopolitan', ipa: '/ˌkɒzməˈpɒlɪtən/', pos: 'adj', meaning_vi: 'thuộc về toàn thế giới, quốc tế', example_en: 'The city has a cosmopolitan atmosphere.', example_vi: 'Thành phố có bầu không khí quốc tế.' },
            { word: 'populous', ipa: '/ˈpɒpjələs/', pos: 'adj', meaning_vi: 'đông dân', example_en: 'Tokyo is one of the most populous cities.', example_vi: 'Tokyo là một trong những thành phố đông dân nhất.' },
            { word: 'fascinating', ipa: '/ˈfæsɪneɪtɪŋ/', pos: 'adj', meaning_vi: 'hấp dẫn, quyến rũ', example_en: 'The city at night is fascinating.', example_vi: 'Thành phố về đêm thật hấp dẫn.' },
            { word: 'exhausting', ipa: '/ɪɡˈzɔːstɪŋ/', pos: 'adj', meaning_vi: 'làm kiệt sức', example_en: 'The traffic in the city can be exhausting.', example_vi: 'Giao thông ở thành phố có thể làm bạn kiệt sức.' },
            { word: 'affordable', ipa: '/əˈfɔːdəbl/', pos: 'adj', meaning_vi: 'giá cả phải chăng', example_en: 'The public transport here is affordable.', example_vi: 'Giao thông công cộng ở đây có giá cả phải chăng.' },
            { word: 'skyscrapers', ipa: '/ˈskaɪskreɪpəz/', pos: 'n', meaning_vi: 'tòa nhà chọc trời', example_en: 'The city center is full of skyscrapers.', example_vi: 'Trung tâm thành phố đầy rẫy những tòa nhà chọc trời.' },
            { word: 'amenity', ipa: '/əˈmiːnəti/', pos: 'n', meaning_vi: 'tiện nghi', example_en: 'The apartment has many modern amenities.', example_vi: 'Căn hộ có nhiều tiện nghi hiện đại.' },
            { word: 'urban sprawl', ipa: '/ˈɜːbən sprɔːl/', pos: 'n', meaning_vi: 'sự mở rộng đô thị', example_en: 'Urban sprawl is a problem in many countries.', example_vi: 'Sự mở rộng đô thị là một vấn đề ở nhiều quốc gia.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Comparison (Review)',
          order: 2,
          objectives: ['Ôn tập so sánh hơn và so sánh nhất'],
          type: 'grammar',
          grammar: {
            title: 'Comparison of Adjectives and Adverbs',
            content: `
### Ôn tập So sánh (Comparison)
- **So sánh hơn (Comparative):**
  - Ngắn: adj/adv + er + than
  - Dài: more + adj/adv + than
  - Ví dụ: City life is **busier than** country life. / He works **more carefully than** his friend.
- **So sánh nhất (Superlative):**
  - Ngắn: the + adj/adv + est
  - Dài: the most + adj/adv
  - Ví dụ: This is **the most expensive** city in the world. / She runs **the fastest** in her class.
- **Các cấu trúc so sánh khác:**
  - **So sánh bằng:** as + adj/adv + as (Ví dụ: This house is **as big as** mine)
  - **So sánh không bằng:** not as/so + adj/adv + as
  - **So sánh gấp đôi/nhiều lần:** twice/three times + as + adj/adv + as
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Living in a Big City',
          order: 3,
          objectives: ['Đọc hiểu về cuộc sống ở thành phố lớn'],
          type: 'reading',
          reading: {
            title: 'The Pros and Cons of City Life',
            passage: 'Living in a big city offers many advantages. There are more job opportunities, better schools, and modern hospitals. People can enjoy various forms of entertainment such as cinemas, theaters, and shopping malls. Public transport is also more convenient and efficient. However, city life has its drawbacks. The cost of living is usually higher than in the countryside. The air is often polluted due to traffic and factories. Noise and overcrowding are common problems that can lead to stress. Despite these challenges, many people still prefer living in the city because of the dynamic lifestyle and the amenities it provides.',
            questions: [
              { question: 'What are some advantages of city life?', options: ['More job opportunities and better schools', 'Fresh air and quietness', 'Lower cost of living'], answer: 'More job opportunities and better schools' },
              { question: 'What forms of entertainment are mentioned?', options: ['Gardening and bird-watching', 'Cinemas, theaters, and shopping malls', 'Hiking and camping'], answer: 'Cinemas, theaters, and shopping malls' },
              { question: 'What is a drawback of city life?', options: ['Efficient public transport', 'High cost of living', 'Better hospitals'], answer: 'High cost of living' },
              { question: 'Why is the air in the city often polluted?', options: ['Because of trees', 'Because of traffic and factories', 'Because of the weather'], answer: 'Because of traffic and factories' },
              { question: 'Why do many people still prefer living in the city?', options: ['Because it is quiet', 'Because of the dynamic lifestyle and amenities', 'Because it is cheap'], answer: 'Because of the dynamic lifestyle and amenities' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit3',
      title: 'Unit 3: Teen Stress and Pressure',
      order: 3,
      description: 'Từ vựng về áp lực của teen. Ngữ pháp: Câu gián tiếp với từ để hỏi đứng trước động từ nguyên mẫu có to.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Teen Stress',
          order: 1,
          objectives: ['Từ vựng về cảm xúc và áp lực'],
          type: 'vocabulary',
          words: [
            { word: 'frustrated', ipa: '/frʌˈstreɪtɪd/', pos: 'adj', meaning_vi: 'bực bội, tuyệt vọng', example_en: 'I feel frustrated when I can\'t solve a problem.', example_vi: 'Tôi cảm thấy bực bội khi không thể giải quyết một vấn đề.' },
            { word: 'depressed', ipa: '/dɪˈprest/', pos: 'adj', meaning_vi: 'trầm cảm, thất vọng', example_en: 'She was depressed after failing the exam.', example_vi: 'Cô ấy đã bị trầm cảm sau khi trượt kỳ thi.' },
            { word: 'self-aware', ipa: '/ˌself əˈweə(r)/', pos: 'adj', meaning_vi: 'tự nhận thức', example_en: 'Teenagers should be self-aware of their strengths.', example_vi: 'Thanh thiếu niên nên tự nhận thức được điểm mạnh của mình.' },
            { word: 'empathise', ipa: '/ˈempəθaɪz/', pos: 'v', meaning_vi: 'đồng cảm', example_en: 'We should empathise with those in need.', example_vi: 'Chúng ta nên đồng cảm với những người gặp khó khăn.' },
            { word: 'cognitive skill', ipa: '/ˈkɒɡnətɪv skɪl/', pos: 'n', meaning_vi: 'kỹ năng nhận thức', example_en: 'Reading helps improve cognitive skills.', example_vi: 'Đọc sách giúp cải thiện kỹ năng nhận thức.' },
            { word: 'adolescence', ipa: '/ˌædəˈlesns/', pos: 'n', meaning_vi: 'tuổi vị thành niên', example_en: 'Adolescence is a period of change.', example_vi: 'Tuổi vị thành niên là một giai đoạn thay đổi.' },
            { word: 'overwhelmed', ipa: '/ˌəʊvəˈwelmd/', pos: 'adj', meaning_vi: 'bị choáng ngợp', example_en: 'I felt overwhelmed by the amount of work.', example_vi: 'Tôi cảm thấy bị choáng ngợp bởi khối lượng công việc.' },
            { word: 'tense', ipa: '/tens/', pos: 'adj', meaning_vi: 'căng thẳng', example_en: 'The atmosphere in the room was tense.', example_vi: 'Bầu không khí trong phòng thật căng thẳng.' },
            { word: 'confident', ipa: '/ˈkɒnfɪdənt/', pos: 'adj', meaning_vi: 'tự tin', example_en: 'Be confident in yourself.', example_vi: 'Hãy tự tin vào bản thân.' },
            { word: 'delighted', ipa: '/dɪˈlaɪtɪd/', pos: 'adj', meaning_vi: 'vui mừng', example_en: 'I was delighted to hear the news.', example_vi: 'Tôi đã rất vui mừng khi nghe tin đó.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Reported speech with question words before to-infinitive',
          order: 2,
          objectives: ['Sử dụng câu gián tiếp với từ để hỏi + to V'],
          type: 'grammar',
          grammar: {
            title: 'Reported speech with question words before to-infinitive',
            content: `
### Câu gián tiếp với từ để hỏi + to-infinitive
- **Cách dùng:** Dùng để thuật lại một câu hỏi, lời khuyên, hoặc hướng dẫn về việc phải làm gì, làm như thế nào, ở đâu...
- **Cấu trúc:** S + V + (O) + question word (what, where, when, how...) + to-infinitive
  - Các động từ tường thuật thường dùng: ask, wonder, not know, have no idea, tell, advise, show...
- **Lưu ý:** "Why" không được dùng với cấu trúc "to-infinitive".
- **Ví dụ:**
  - "Where should I park the car?" -> He didn't know **where to park** the car.
  - "How do I use this machine?" -> She showed me **how to use** this machine.
  - "What should we do next?" -> We wondered **what to do** next.
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
            title: 'Teen Stress and Pressure',
            passage: "Teenagers today face various sources of stress and pressure. One of the main causes is academic pressure. Many students feel overwhelmed by the amount of homework and the expectation to get high grades. They worry about passing exams and getting into good universities. Another source of stress is peer pressure. Teenagers often want to fit in with their friends and may feel pressured to act or dress in a certain way. Family issues, such as arguments with parents or financial problems, can also contribute to their stress. To cope with stress, teenagers should learn to manage their time effectively, talk to someone they trust, and find healthy ways to relax, such as playing sports or listening to music.",
            questions: [
              { question: 'What is one of the main causes of stress for teenagers?', options: ['Playing sports', 'Academic pressure', 'Listening to music'], answer: 'Academic pressure' },
              { question: 'Why do students feel overwhelmed?', options: ['Because of too much free time', 'Because of the amount of homework and expectations', 'Because they like exams'], answer: 'Because of the amount of homework and expectations' },
              { question: 'What is peer pressure?', options: ['Pressure from parents', 'Pressure to fit in with friends', 'Pressure from teachers'], answer: 'Pressure to fit in with friends' },
              { question: 'What family issues can cause stress?', options: ['Going on vacation', 'Arguments with parents or financial problems', 'Having dinner together'], answer: 'Arguments with parents or financial problems' },
              { question: 'How can teenagers cope with stress?', options: ['By ignoring it', 'By talking to someone they trust and relaxing', 'By studying more'], answer: 'By talking to someone they trust and relaxing' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit4',
      title: 'Unit 4: Life in the Past',
      order: 4,
      description: 'Từ vựng về cuộc sống xưa. Ngữ pháp: Used to (ôn tập), Cấu trúc Wish cho hiện tại.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Past life',
          order: 1,
          objectives: ['Từ vựng về các đồ vật và thói quen xưa'],
          type: 'vocabulary',
          words: [
            { word: 'illiterate', ipa: '/ɪˈlɪtərət/', pos: 'adj', meaning_vi: 'mù chữ', example_en: 'In the past, many people were illiterate.', example_vi: 'Trong quá khứ, nhiều người đã bị mù chữ.' },
            { word: 'bare-footed', ipa: '/beə(r) ˈfʊtɪd/', pos: 'adj', meaning_vi: 'chân đất', example_en: 'Children used to go bare-footed to school.', example_vi: 'Trẻ em từng đi chân đất đến trường.' },
            { word: 'street vendor', ipa: '/striːt ˈvendə(r)/', pos: 'n', meaning_vi: 'người bán hàng rong', example_en: 'I bought some snacks from a street vendor.', example_vi: 'Tôi đã mua một ít đồ ăn nhẹ từ một người bán hàng rong.' },
            { word: 'traditional', ipa: '/trəˈdɪʃənl/', pos: 'adj', meaning_vi: 'truyền thống', example_en: 'They still keep their traditional customs.', example_vi: 'Họ vẫn giữ những phong tục truyền thống của mình.' },
            { word: 'entertainment', ipa: '/ˌentəˈteɪnmənt/', pos: 'n', meaning_vi: 'sự giải trí', example_en: 'What was the main form of entertainment in the past?', example_vi: 'Hình thức giải trí chính trong quá khứ là gì?' },
            { word: 'preserve', ipa: '/prɪˈzɜːv/', pos: 'v', meaning_vi: 'bảo tồn', example_en: 'We should preserve our history.', example_vi: 'Chúng ta nên bảo tồn lịch sử của mình.' },
            { word: 'spectacular', ipa: '/spekˈtækjələ(r)/', pos: 'adj', meaning_vi: 'ngoạn mục, hùng vĩ', example_en: 'The view from the top is spectacular.', example_vi: 'Cảnh nhìn từ trên đỉnh thật ngoạn mục.' },
            { word: 'seniority', ipa: '/ˌsiːniˈɒrəti/', pos: 'n', meaning_vi: 'thâm niên, bậc trên', example_en: 'Respect is often based on seniority.', example_vi: 'Sự tôn trọng thường dựa trên thâm niên.' },
            { word: 'dynasty', ipa: '/ˈdɪnəsti/', pos: 'n', meaning_vi: 'triều đại', example_en: 'The Nguyen Dynasty was the last in Vietnam.', example_vi: 'Triều đại nhà Nguyễn là triều đại cuối cùng ở Việt Nam.' },
            { word: 'artifact', ipa: '/ˈɑːrtɪfækt/', pos: 'n', meaning_vi: 'hiện vật', example_en: 'The museum displays many ancient artifacts.', example_vi: 'Bảo tàng trưng bày nhiều hiện vật cổ.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Used to & Wish',
          order: 2,
          objectives: ['Sử dụng Used to và cấu trúc Wish cho hiện tại'],
          type: 'grammar',
          grammar: {
            title: 'Used to & Wish for the present',
            content: `
### 1. Used to (Đã từng)
- **Cách dùng:** Diễn tả một thói quen, trạng thái hoặc hành động thường xuyên xảy ra trong quá khứ nhưng bây giờ không còn nữa.
- **Cấu trúc:**
  - Khẳng định: S + used to + V(nguyên thể)
  - Phủ định: S + didn't use to + V(nguyên thể)
  - Nghi vấn: Did + S + use to + V(nguyên thể)?
- **Ví dụ:** I **used to play** marbles when I was young. (Tôi từng chơi bắn bi khi còn nhỏ.)

### 2. Cấu trúc Wish cho hiện tại (Present Wish)
- **Cách dùng:** Diễn tả một điều ước không có thật hoặc trái ngược với thực tế ở hiện tại.
- **Cấu trúc:** S + wish(es) + S + V(quá khứ đơn)
  - *Lưu ý:* Động từ "to be" thường dùng "were" cho tất cả các ngôi.
- **Ví dụ:**
  - I **wish** I **had** a lot of money. (Thực tế: Tôi không có nhiều tiền.)
  - She **wishes** she **were** taller. (Thực tế: Cô ấy không cao.)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Life in the Past',
          order: 3,
          objectives: ['Đọc hiểu về cuộc sống trong quá khứ'],
          type: 'reading',
          reading: {
            title: 'Life in the Past',
            passage: "Life in Vietnam in the past was very different from today. People used to live in houses made of mud and straw. There was no electricity, so they used oil lamps for lighting. Most people were farmers and worked hard in the fields from early morning until late afternoon. Children didn't have many toys or electronic devices. They used to play traditional games like hide-and-seek, flying kites, or skipping rope. Transportation was also very basic. People mostly walked or traveled by bicycle or ox cart. Despite the hardships, people in the past had a strong sense of community. They often helped each other with farming and celebrated festivals together.",
            questions: [
              { question: 'What were houses in the past made of?', options: ['Brick and cement', 'Mud and straw', 'Wood and glass'], answer: 'Mud and straw' },
              { question: 'What did people use for lighting?', options: ['Electric bulbs', 'Candles', 'Oil lamps'], answer: 'Oil lamps' },
              { question: 'What did most people do for a living?', options: ['They were teachers', 'They were farmers', 'They were factory workers'], answer: 'They were farmers' },
              { question: 'What games did children use to play?', options: ['Video games', 'Hide-and-seek and flying kites', 'Board games'], answer: 'Hide-and-seek and flying kites' },
              { question: 'How did people mostly travel?', options: ['By car', 'By airplane', 'By walking, bicycle, or ox cart'], answer: 'By walking, bicycle, or ox cart' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit5',
      title: 'Unit 5: Wonders of Viet Nam',
      order: 5,
      description: 'Từ vựng về các kỳ quan. Ngữ pháp: Câu bị động khách quan, It is said that...',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Wonders',
          order: 1,
          objectives: ['Từ vựng về các danh lam thắng cảnh và kỳ quan'],
          type: 'vocabulary',
          words: [
            { word: 'citadel', ipa: '/ˈsɪtədəl/', pos: 'n', meaning_vi: 'thành trì', example_en: 'The Hue Citadel is a UNESCO World Heritage site.', example_vi: 'Kinh thành Huế là một di sản thế giới của UNESCO.' },
            { word: 'limestone', ipa: '/ˈlaɪmstəʊn/', pos: 'n', meaning_vi: 'đá vôi', example_en: 'Ha Long Bay is famous for its limestone islands.', example_vi: 'Vịnh Hạ Long nổi tiếng với những hòn đảo đá vôi.' },
            { word: 'cavern', ipa: '/ˈkævən/', pos: 'n', meaning_vi: 'hang động lớn', example_en: 'Son Doong is the largest cavern in the world.', example_vi: 'Sơn Đoòng là hang động lớn nhất thế giới.' },
            { word: 'complex', ipa: '/ˈkɒmpleks/', pos: 'n', meaning_vi: 'quần thể, khu phức hợp', example_en: 'The complex of Hue monuments is beautiful.', example_vi: 'Quần thể di tích Huế thật đẹp.' },
            { word: 'astounding', ipa: '/əˈstaʊndɪŋ/', pos: 'adj', meaning_vi: 'đáng kinh ngạc', example_en: 'The beauty of the cave is astounding.', example_vi: 'Vẻ đẹp của hang động thật đáng kinh ngạc.' },
            { word: 'picturesque', ipa: '/ˌpɪktʃəˈresk/', pos: 'adj', meaning_vi: 'đẹp như tranh vẽ', example_en: 'The village is located in a picturesque valley.', example_vi: 'Ngôi làng nằm trong một thung lũng đẹp như tranh vẽ.' },
            { word: 'recognition', ipa: '/ˌrekəɡˈnɪʃn/', pos: 'n', meaning_vi: 'sự công nhận', example_en: 'The site received international recognition.', example_vi: 'Địa điểm này đã nhận được sự công nhận quốc tế.' },
            { word: 'measure', ipa: '/ˈmeʒə(r)/', pos: 'n', meaning_vi: 'biện pháp', example_en: 'We need to take measures to protect the site.', example_vi: 'Chúng ta cần thực hiện các biện pháp để bảo vệ địa điểm này.' },
            { word: 'structure', ipa: '/ˈstrʌktʃə(r)/', pos: 'n', meaning_vi: 'cấu trúc, công trình', example_en: 'The ancient structure is still standing.', example_vi: 'Công trình cổ vẫn còn đứng vững.' },
            { word: 'geological', ipa: '/ˌdʒiːəˈlɒdʒɪkl/', pos: 'adj', meaning_vi: 'thuộc về địa chất', example_en: 'The area has unique geological features.', example_vi: 'Khu vực này có những đặc điểm địa chất độc đáo.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Impersonal passive',
          order: 2,
          objectives: ['Sử dụng câu bị động khách quan'],
          type: 'grammar',
          grammar: {
            title: 'Impersonal passive (Câu bị động khách quan)',
            content: `
### Câu bị động khách quan (It is said that...)
- **Cách dùng:** Dùng để diễn đạt ý kiến, niềm tin, hoặc lời đồn đại của mọi người nói chung (người nói không muốn hoặc không cần nêu rõ ai là người nói).
- **Cấu trúc:**
  - **Chủ động:** People/They + say/think/believe/report... + that + S + V
  - **Bị động (Cách 1):** It + is/was + said/thought/believed/reported... + that + S + V
  - **Bị động (Cách 2):** S + is/are/was/were + said/thought/believed... + to V / to have V3/ed
- **Ví dụ:**
  - Chủ động: People say that Ha Long Bay is beautiful.
  - Bị động 1: **It is said that** Ha Long Bay is beautiful.
  - Bị động 2: Ha Long Bay **is said to be** beautiful.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Wonders of Viet Nam',
          order: 3,
          objectives: ['Đọc hiểu về các kỳ quan của Việt Nam'],
          type: 'reading',
          reading: {
            title: 'Wonders of Viet Nam',
            passage: "Viet Nam is a country with many natural and man-made wonders. One of the most famous natural wonders is Ha Long Bay, which is recognized by UNESCO as a World Heritage Site. It is known for its thousands of limestone islands and beautiful caves. Another amazing natural wonder is Son Doong Cave, the largest cave in the world, located in Phong Nha-Ke Bang National Park. For man-made wonders, the Hue Imperial Citadel is a must-visit. It was the capital of Viet Nam during the Nguyen Dynasty and features impressive architecture. It is said that visiting these wonders helps people understand more about the history and natural beauty of Viet Nam. The government is taking measures to preserve these sites for future generations.",
            questions: [
              { question: 'What is Ha Long Bay recognized as?', options: ['A modern city', 'A World Heritage Site', 'A national park'], answer: 'A World Heritage Site' },
              { question: 'What is Ha Long Bay known for?', options: ['Tall buildings', 'Limestone islands and caves', 'Beautiful beaches'], answer: 'Limestone islands and caves' },
              { question: 'Where is Son Doong Cave located?', options: ['In Ha Long Bay', 'In Phong Nha-Ke Bang National Park', 'In Hue'], answer: 'In Phong Nha-Ke Bang National Park' },
              { question: 'What was the Hue Imperial Citadel in the past?', options: ['A market', 'The capital of Viet Nam', 'A temple'], answer: 'The capital of Viet Nam' },
              { question: 'Why is the government taking measures?', options: ['To build more hotels', 'To preserve these sites', 'To sell the sites'], answer: 'To preserve these sites' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit6',
      title: 'Unit 6: Viet Nam: Then and Now',
      order: 6,
      description: 'Từ vựng về sự thay đổi của Việt Nam. Ngữ pháp: Cấu trúc It + be + adj + that-clause, It + be + adj + to-infinitive.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Changes',
          order: 1,
          objectives: ['Từ vựng về sự phát triển và thay đổi'],
          type: 'vocabulary',
          words: [
            { word: 'modernize', ipa: '/ˈmɒdənaɪz/', pos: 'v', meaning_vi: 'hiện đại hóa', example_en: 'The city is being modernized rapidly.', example_vi: 'Thành phố đang được hiện đại hóa nhanh chóng.' },
            { word: 'infrastructure', ipa: '/ˈɪnfrəstrʌktʃə(r)/', pos: 'n', meaning_vi: 'cơ sở hạ tầng', example_en: 'The government is investing in infrastructure.', example_vi: 'Chính phủ đang đầu tư vào cơ sở hạ tầng.' },
            { word: 'flyover', ipa: '/ˈflaɪəʊvə(r)/', pos: 'n', meaning_vi: 'cầu vượt', example_en: 'New flyovers have helped reduce traffic jams.', example_vi: 'Những cây cầu vượt mới đã giúp giảm tắc đường.' },
            { word: 'skytrain', ipa: '/ˈskaɪtreɪn/', pos: 'n', meaning_vi: 'tàu điện trên cao', example_en: 'The skytrain system is under construction.', example_vi: 'Hệ thống tàu điện trên cao đang được xây dựng.' },
            { word: 'noticeable', ipa: '/ˈnəʊtɪsəbl/', pos: 'adj', meaning_vi: 'đáng chú ý', example_en: 'There is a noticeable improvement in her English.', example_vi: 'Có một sự cải thiện đáng chú ý trong tiếng Anh của cô ấy.' },
            { word: 'dramatic', ipa: '/drəˈmætɪk/', pos: 'adj', meaning_vi: 'đột ngột, kịch tính', example_en: 'The city has undergone dramatic changes.', example_vi: 'Thành phố đã trải qua những thay đổi đột ngột.' },
            { word: 'tolerant', ipa: '/ˈtɒlərənt/', pos: 'adj', meaning_vi: 'bao dung, khoan dung', example_en: 'People are becoming more tolerant of different cultures.', example_vi: 'Mọi người đang trở nên bao dung hơn với các nền văn hóa khác nhau.' },
            { word: 'cooperative', ipa: '/kəʊˈɒpərətɪv/', pos: 'adj', meaning_vi: 'hợp tác', example_en: 'The two countries have a cooperative relationship.', example_vi: 'Hai nước có một mối quan hệ hợp tác.' },
            { word: 'extended family', ipa: '/ɪkˈstendɪd ˈfæmili/', pos: 'n', meaning_vi: 'gia đình đa thế hệ', example_en: 'I live in an extended family with my grandparents.', example_vi: 'Tôi sống trong một gia đình đa thế hệ với ông bà.' },
            { word: 'nuclear family', ipa: '/ˌnjuːkliə ˈfæmili/', pos: 'n', meaning_vi: 'gia đình hạt nhân (2 thế hệ)', example_en: 'Nuclear families are more common in cities.', example_vi: 'Gia đình hạt nhân phổ biến hơn ở các thành phố.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Adjective structures',
          order: 2,
          objectives: ['Sử dụng cấu trúc It + be + adj + that-clause / to-infinitive'],
          type: 'grammar',
          grammar: {
            title: 'Adjective structures',
            content: `
### 1. It + be + adj + that-clause
- **Cách dùng:** Dùng để nhấn mạnh cảm xúc, ý kiến hoặc sự chắc chắn về một sự việc nào đó.
- **Cấu trúc:** It + is/was + adj + that + S + V
  - Các tính từ thường dùng: important, necessary, surprising, clear, obvious, true...
- **Ví dụ:** **It is important that** we protect the environment. (Điều quan trọng là chúng ta phải bảo vệ môi trường.)

### 2. It + be + adj + (for O) + to-infinitive
- **Cách dùng:** Dùng để đưa ra nhận xét về một hành động.
- **Cấu trúc:** It + is/was + adj + (for O) + to V
  - Các tính từ thường dùng: easy, hard, difficult, interesting, boring, dangerous...
- **Ví dụ:** **It is difficult for me to learn** Japanese. (Thật khó cho tôi để học tiếng Nhật.)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Viet Nam: Then and Now',
          order: 3,
          objectives: ['Đọc hiểu về sự thay đổi của Việt Nam'],
          type: 'reading',
          reading: {
            title: 'Viet Nam: Then and Now',
            passage: "Over the past few decades, Viet Nam has experienced dramatic changes. In the past, the infrastructure was poor, and transportation was mostly by bicycle or motorbike. Today, it is easy to see modern flyovers, highways, and even skytrains under construction in big cities. The economy has also grown significantly, improving the living standards of many people. However, some things remain unchanged. The traditional values, such as respect for the elderly and close family ties, are still preserved. It is important that we keep these traditions alive while embracing modern development. Many people believe that it is necessary to find a balance between economic growth and cultural preservation.",
            questions: [
              { question: 'How has Viet Nam changed over the past few decades?', options: ['It has not changed', 'It has experienced dramatic changes', 'It has become poorer'], answer: 'It has experienced dramatic changes' },
              { question: 'What was transportation like in the past?', options: ['Mostly by car', 'Mostly by bicycle or motorbike', 'Mostly by train'], answer: 'Mostly by bicycle or motorbike' },
              { question: 'What can be seen in big cities today?', options: ['Only old houses', 'Modern flyovers, highways, and skytrains', 'Farms'], answer: 'Modern flyovers, highways, and skytrains' },
              { question: 'What traditional values are still preserved?', options: ['Wearing traditional clothes every day', 'Respect for the elderly and close family ties', 'Eating only traditional food'], answer: 'Respect for the elderly and close family ties' },
              { question: 'What is necessary according to many people?', options: ['To forget the past', 'To find a balance between economic growth and cultural preservation', 'To stop developing'], answer: 'To find a balance between economic growth and cultural preservation' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit7',
      title: 'Unit 7: Recipes and Eating Habits',
      order: 7,
      description: 'Từ vựng về nấu ăn và thói quen ăn uống. Ngữ pháp: Các từ chỉ định lượng, Động từ khuyết thiếu trong câu điều kiện loại 1.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Cooking',
          order: 1,
          objectives: ['Từ vựng về nguyên liệu và cách chế biến'],
          type: 'vocabulary',
          words: [
            { word: 'ingredient', ipa: '/ɪnˈɡriːdiənt/', pos: 'n', meaning_vi: 'nguyên liệu', example_en: 'Mix all the ingredients together.', example_vi: 'Trộn tất cả các nguyên liệu lại với nhau.' },
            { word: 'recipe', ipa: '/ˈresəpi/', pos: 'n', meaning_vi: 'công thức nấu ăn', example_en: 'I followed the recipe carefully.', example_vi: 'Tôi đã làm theo công thức một cách cẩn thận.' },
            { word: 'marinate', ipa: '/ˈmærɪneɪt/', pos: 'v', meaning_vi: 'tẩm ướp', example_en: 'Marinate the meat for 30 minutes.', example_vi: 'Tẩm ướp thịt trong 30 phút.' },
            { word: 'stir-fry', ipa: '/ˈstɜː(r) fraɪ/', pos: 'v', meaning_vi: 'xào', example_en: 'Stir-fry the vegetables in a hot pan.', example_vi: 'Xào rau trong chảo nóng.' },
            { word: 'steam', ipa: '/stiːm/', pos: 'v', meaning_vi: 'hấp', example_en: 'Steamed fish is very healthy.', example_vi: 'Cá hấp rất tốt cho sức khỏe.' },
            { word: 'deep-fry', ipa: '/ˌdiːp ˈfraɪ/', pos: 'v', meaning_vi: 'chiên ngập dầu', example_en: 'Deep-fry the chicken until golden brown.', example_vi: 'Chiên ngập dầu gà cho đến khi có màu nâu vàng.' },
            { word: 'nutritious', ipa: '/njuˈtrɪʃəs/', pos: 'adj', meaning_vi: 'bổ dưỡng', example_en: 'Vegetables are very nutritious.', example_vi: 'Rau củ rất bổ dưỡng.' },
            { word: 'staple', ipa: '/ˈsteɪpl/', pos: 'adj', meaning_vi: 'chính, chủ yếu', example_en: 'Rice is a staple food in Vietnam.', example_vi: 'Gạo là thực phẩm chính ở Việt Nam.' },
            { word: 'garnish', ipa: '/ˈɡɑːrnɪʃ/', pos: 'v', meaning_vi: 'trang trí món ăn', example_en: 'Garnish the dish with some herbs.', example_vi: 'Trang trí món ăn với một ít rau thơm.' },
            { word: 'versatile', ipa: '/ˈvɜːsətaɪl/', pos: 'adj', meaning_vi: 'linh hoạt, đa năng', example_en: 'Eggs are a versatile ingredient.', example_vi: 'Trứng là một nguyên liệu linh hoạt.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Quantifiers & Modal verbs in conditional sentences type 1',
          order: 2,
          objectives: ['Sử dụng các từ chỉ định lượng và động từ khuyết thiếu trong câu điều kiện loại 1'],
          type: 'grammar',
          grammar: {
            title: 'Quantifiers & Modal verbs in conditional sentences type 1',
            content: `
### 1. Các từ chỉ định lượng (Quantifiers)
- **a/an:** dùng với danh từ đếm được số ít.
- **some/any:** dùng với danh từ đếm được số nhiều và không đếm được. (Some dùng trong câu khẳng định, Any dùng trong câu phủ định và nghi vấn).
- **a few / a little:** một ít (đủ dùng). A few + N(đếm được số nhiều). A little + N(không đếm được).
- **many / much:** nhiều. Many + N(đếm được số nhiều). Much + N(không đếm được).
- **a lot of / lots of:** nhiều (dùng cho cả N đếm được và không đếm được).

### 2. Động từ khuyết thiếu trong câu điều kiện loại 1
- **Cách dùng:** Dùng để diễn tả khả năng, sự cho phép, lời khuyên, hoặc sự bắt buộc trong tương lai nếu điều kiện xảy ra.
- **Cấu trúc:** If + S + V(hiện tại đơn), S + can/must/may/might/should + V(nguyên thể)
- **Ví dụ:**
  - If you finish your homework, you **can** watch TV. (Sự cho phép)
  - If you want to lose weight, you **should** eat less fast food. (Lời khuyên)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Recipes and Eating Habits',
          order: 3,
          objectives: ['Đọc hiểu về thói quen ăn uống lành mạnh'],
          type: 'reading',
          reading: {
            title: 'Healthy Eating Habits',
            passage: "Having a healthy diet is essential for our well-being. A balanced diet should include a variety of foods from different groups. We need carbohydrates for energy, which can be found in rice, bread, and pasta. Proteins are important for building muscles, and they are abundant in meat, fish, eggs, and beans. Vitamins and minerals, found in fruits and vegetables, help protect our bodies from diseases. It is also important to pay attention to our eating habits. We should eat regular meals, chew our food well, and avoid eating too much fast food or sugary snacks. Drinking plenty of water every day is another crucial habit. If we maintain a healthy diet and good eating habits, we can prevent many health problems and feel more energetic.",
            questions: [
              { question: 'Why is a healthy diet essential?', options: ['For our well-being', 'To save money', 'To become famous'], answer: 'For our well-being' },
              { question: 'What do carbohydrates provide?', options: ['Vitamins', 'Energy', 'Minerals'], answer: 'Energy' },
              { question: 'Where can we find proteins?', options: ['In fruits and vegetables', 'In meat, fish, eggs, and beans', 'In water'], answer: 'In meat, fish, eggs, and beans' },
              { question: 'What should we avoid eating too much of?', options: ['Fruits and vegetables', 'Fast food or sugary snacks', 'Rice and bread'], answer: 'Fast food or sugary snacks' },
              { question: 'What is another crucial habit mentioned?', options: ['Sleeping 10 hours a day', 'Drinking plenty of water every day', 'Exercising every morning'], answer: 'Drinking plenty of water every day' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit8',
      title: 'Unit 8: Tourism',
      order: 8,
      description: 'Từ vựng về du lịch. Ngữ pháp: Mạo từ (ôn tập).',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Tourism',
          order: 1,
          objectives: ['Từ vựng về các loại hình du lịch và dịch vụ'],
          type: 'vocabulary',
          words: [
            { word: 'itinerary', ipa: '/aɪˈtɪnərəri/', pos: 'n', meaning_vi: 'lịch trình chuyến đi', example_en: 'We have a busy itinerary for our trip.', example_vi: 'Chúng tôi có một lịch trình bận rộn cho chuyến đi của mình.' },
            { word: 'destination', ipa: '/ˌdestɪˈneɪʃn/', pos: 'n', meaning_vi: 'điểm đến', example_en: 'Paris is a popular tourist destination.', example_vi: 'Paris là một điểm đến du lịch phổ biến.' },
            { word: 'check-in', ipa: '/ˈtʃek ɪn/', pos: 'n/v', meaning_vi: 'làm thủ tục nhận phòng', example_en: 'Check-in is at 2 PM.', example_vi: 'Thủ tục nhận phòng là lúc 2 giờ chiều.' },
            { word: 'package tour', ipa: '/ˈpækɪdʒ tʊə(r)/', pos: 'n', meaning_vi: 'du lịch trọn gói', example_en: 'We booked a package tour to Japan.', example_vi: 'Chúng tôi đã đặt một chuyến du lịch trọn gói đến Nhật Bản.' },
            { word: 'sightseeing', ipa: '/ˈsaɪtsiːɪŋ/', pos: 'n', meaning_vi: 'việc đi tham quan', example_en: 'We went sightseeing in the city center.', example_vi: 'Chúng tôi đã đi tham quan ở trung tâm thành phố.' },
            { word: 'souvenir', ipa: '/ˌsuːvəˈnɪə(r)/', pos: 'n', meaning_vi: 'quà lưu niệm', example_en: 'I bought a small souvenir for my sister.', example_vi: 'Tôi đã mua một món quà lưu niệm nhỏ cho em gái mình.' },
            { word: 'breathtaking', ipa: '/ˈbreθteɪkɪŋ/', pos: 'adj', meaning_vi: 'đẹp đến ngỡ ngàng', example_en: 'The view from the mountain is breathtaking.', example_vi: 'Cảnh nhìn từ trên núi đẹp đến ngỡ ngàng.' },
            { word: 'affordable', ipa: '/əˈfɔːdəbl/', pos: 'adj', meaning_vi: 'giá cả phải chăng', example_en: 'The hotel is comfortable and affordable.', example_vi: 'Khách sạn thoải mái và giá cả phải chăng.' },
            { word: 'explore', ipa: '/ɪkˈsplɔː(r)/', pos: 'v', meaning_vi: 'khám phá', example_en: 'I love exploring new places.', example_vi: 'Tôi thích khám phá những địa điểm mới.' },
            { word: 'tourist attraction', ipa: '/ˈtʊərɪst əˈtrækʃn/', pos: 'n', meaning_vi: 'điểm thu hút khách du lịch', example_en: 'The Eiffel Tower is a major tourist attraction.', example_vi: 'Tháp Eiffel là một điểm thu hút khách du lịch lớn.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Articles (Review)',
          order: 2,
          objectives: ['Ôn tập cách sử dụng mạo từ a, an, the'],
          type: 'grammar',
          grammar: {
            title: 'Articles (Mạo từ)',
            content: `
### Ôn tập Mạo từ (a, an, the, zero article)
- **A / An (Mạo từ không xác định):**
  - Dùng trước danh từ đếm được số ít, được nhắc đến lần đầu tiên.
  - "A" đứng trước phụ âm, "An" đứng trước nguyên âm (u, e, o, a, i).
- **The (Mạo từ xác định):**
  - Dùng trước danh từ đã được xác định (cả người nói và người nghe đều biết).
  - Dùng trước những thứ duy nhất (the sun, the moon, the earth).
  - Dùng trước tên các đại dương, sông ngòi, dãy núi, quần đảo (the Pacific, the Thames, the Alps).
  - Dùng trước tên một số quốc gia có chứa từ "Republic", "State", "Kingdom" (the UK, the USA).
- **Zero article (Không dùng mạo từ):**
  - Trước danh từ số nhiều hoặc không đếm được mang nghĩa chung chung.
  - Trước tên hầu hết các quốc gia, thành phố, châu lục, hồ, ngọn núi đơn lẻ.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Tourism',
          order: 3,
          objectives: ['Đọc hiểu về du lịch sinh thái'],
          type: 'reading',
          reading: {
            title: 'Ecotourism',
            passage: "Ecotourism is a form of tourism that involves visiting fragile, pristine, and relatively undisturbed natural areas. Its main purpose is to educate the traveler, provide funds for ecological conservation, and directly benefit the economic development and political empowerment of local communities. Unlike traditional mass tourism, ecotourism focuses on minimizing the negative impact on the environment. Ecotourists often participate in activities such as hiking, bird watching, and visiting local villages. They are encouraged to respect local cultures and traditions, and to avoid damaging the natural habitat. By choosing ecotourism, travelers can enjoy beautiful landscapes while contributing to the protection of the environment and the well-being of local people.",
            questions: [
              { question: 'What kind of areas does ecotourism involve visiting?', options: ['Crowded cities', 'Fragile and natural areas', 'Industrial zones'], answer: 'Fragile and natural areas' },
              { question: 'What is one of the main purposes of ecotourism?', options: ['To build large hotels', 'To provide funds for ecological conservation', 'To create mass tourism'], answer: 'To provide funds for ecological conservation' },
              { question: 'What does ecotourism focus on minimizing?', options: ['The negative impact on the environment', 'The number of tourists', 'The cost of travel'], answer: 'The negative impact on the environment' },
              { question: 'What activities do ecotourists often participate in?', options: ['Shopping in malls', 'Hiking and bird watching', 'Going to casinos'], answer: 'Hiking and bird watching' },
              { question: 'What are ecotourists encouraged to respect?', options: ['Only the environment', 'Local cultures and traditions', 'The tour guides'], answer: 'Local cultures and traditions' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit9',
      title: 'Unit 9: English in the World',
      order: 9,
      description: 'Từ vựng về tiếng Anh toàn cầu. Ngữ pháp: Mệnh đề quan hệ.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - English',
          order: 1,
          objectives: ['Từ vựng về việc học và sử dụng tiếng Anh'],
          type: 'vocabulary',
          words: [
            { word: 'fluent', ipa: '/ˈfluːənt/', pos: 'adj', meaning_vi: 'trôi chảy', example_en: 'She is fluent in three languages.', example_vi: 'Cô ấy nói trôi chảy ba thứ tiếng.' },
            { word: 'bilingual', ipa: '/ˌbaɪˈlɪŋɡwəl/', pos: 'adj', meaning_vi: 'song ngữ', example_en: 'He is bilingual in English and Vietnamese.', example_vi: 'Anh ấy song ngữ tiếng Anh và tiếng Việt.' },
            { word: 'dialect', ipa: '/ˈdaɪəlekt/', pos: 'n', meaning_vi: 'tiếng địa phương', example_en: 'They speak a local dialect.', example_vi: 'Họ nói tiếng địa phương.' },
            { word: 'vocabulary', ipa: '/vəˈkæbjələri/', pos: 'n', meaning_vi: 'từ vựng', example_en: 'Reading helps expand your vocabulary.', example_vi: 'Đọc sách giúp mở rộng vốn từ vựng của bạn.' },
            { word: 'pronunciation', ipa: '/prəˌnʌnsiˈeɪʃn/', pos: 'n', meaning_vi: 'sự phát âm', example_en: 'Good pronunciation is important.', example_vi: 'Phát âm tốt là điều quan trọng.' },
            { word: 'imitate', ipa: '/ˈɪmɪteɪt/', pos: 'v', meaning_vi: 'bắt chước', example_en: 'Try to imitate the native speaker\'s accent.', example_vi: 'Hãy thử bắt chước giọng của người bản ngữ.' },
            { word: 'get by', ipa: '/ɡet baɪ/', pos: 'v', meaning_vi: 'xoay xở được', example_en: 'I can get by in French.', example_vi: 'Tôi có thể xoay xở được bằng tiếng Pháp.' },
            { word: 'rusty', ipa: '/ˈrʌsti/', pos: 'adj', meaning_vi: 'bị mai một (kiến thức)', example_en: 'My English is a bit rusty.', example_vi: 'Tiếng Anh của tôi hơi bị mai một một chút.' },
            { word: 'pick up', ipa: '/pɪk ʌp/', pos: 'v', meaning_vi: 'học lỏm được', example_en: 'She picked up some Spanish while on holiday.', example_vi: 'Cô ấy đã học lỏm được một ít tiếng Tây Ban Nha khi đi nghỉ.' },
            { word: 'global language', ipa: '/ˈɡləʊbl ˈlæŋɡwɪdʒ/', pos: 'n', meaning_vi: 'ngôn ngữ toàn cầu', example_en: 'English is a global language.', example_vi: 'Tiếng Anh là một ngôn ngữ toàn cầu.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Relative clauses',
          order: 2,
          objectives: ['Sử dụng mệnh đề quan hệ'],
          type: 'grammar',
          grammar: {
            title: 'Relative clauses (Mệnh đề quan hệ)',
            content: `
### Mệnh đề quan hệ (Relative clauses)
- **Cách dùng:** Dùng để bổ nghĩa cho danh từ đứng trước nó, giúp làm rõ danh từ đó là ai, cái gì.
- **Các đại từ quan hệ:**
  - **Who:** Thay thế cho danh từ chỉ người, làm chủ ngữ hoặc tân ngữ trong mệnh đề quan hệ.
    - Ví dụ: The man **who** is standing there is my uncle.
  - **Whom:** Thay thế cho danh từ chỉ người, làm tân ngữ trong mệnh đề quan hệ (thường dùng trong văn phong trang trọng).
    - Ví dụ: The woman **whom** I met yesterday is a doctor.
  - **Which:** Thay thế cho danh từ chỉ vật, làm chủ ngữ hoặc tân ngữ trong mệnh đề quan hệ.
    - Ví dụ: The book **which** is on the table is mine.
  - **That:** Có thể thay thế cho who, whom, which trong mệnh đề quan hệ xác định.
    - Ví dụ: The car **that** I bought is very fast.
  - **Whose:** Chỉ sự sở hữu cho cả người và vật.
    - Ví dụ: The boy **whose** bicycle was stolen is crying.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - English in the World',
          order: 3,
          objectives: ['Đọc hiểu về vai trò của tiếng Anh trên thế giới'],
          type: 'reading',
          reading: {
            title: 'English as a Global Language',
            passage: "English is often considered a global language. It is the mother tongue of more than 400 million people across the world, and it is spoken as a second or foreign language by over a billion more. English is the dominant language in international business, science, technology, and aviation. Many multinational companies require their employees to be fluent in English. Furthermore, a vast amount of information on the internet is in English. Learning English opens up many opportunities for education, career advancement, and cultural exchange. While there are many different dialects and accents of English, such as British, American, and Australian English, people from different parts of the world can still communicate and understand each other. The importance of English in today's interconnected world cannot be overstated.",
            questions: [
              { question: 'How many people speak English as their mother tongue?', options: ['Over a billion', 'More than 400 million', 'Only people in the UK and USA'], answer: 'More than 400 million' },
              { question: 'In which fields is English the dominant language?', options: ['Only in education', 'International business, science, technology, and aviation', 'Only in literature'], answer: 'International business, science, technology, and aviation' },
              { question: 'What do many multinational companies require?', options: ['Employees to be fluent in English', 'Employees to speak only their native language', 'Employees to work from home'], answer: 'Employees to be fluent in English' },
              { question: 'What does learning English open up opportunities for?', options: ['Only for traveling', 'Education, career advancement, and cultural exchange', 'Only for watching movies'], answer: 'Education, career advancement, and cultural exchange' },
              { question: 'What is true about different dialects of English?', options: ['They make communication impossible', 'People from different parts of the world can still communicate', 'They are all exactly the same'], answer: 'People from different parts of the world can still communicate' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit10',
      title: 'Unit 10: Space Travel',
      order: 10,
      description: 'Từ vựng về du hành vũ trụ. Ngữ pháp: Thì quá khứ hoàn thành (ôn tập), Mệnh đề quan hệ xác định và không xác định.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Space Travel',
          order: 1,
          objectives: ['Từ vựng về vũ trụ và các phi hành gia'],
          type: 'vocabulary',
          words: [
            { word: 'weightless', ipa: '/ˈweɪtləs/', pos: 'adj', meaning_vi: 'không trọng lượng', example_en: 'Astronauts feel weightless in space.', example_vi: 'Các phi hành gia cảm thấy không trọng lượng trong không gian.' },
            { word: 'spacecraft', ipa: '/ˈspeɪskrɑːft/', pos: 'n', meaning_vi: 'tàu vũ trụ', example_en: 'The spacecraft was launched yesterday.', example_vi: 'Tàu vũ trụ đã được phóng ngày hôm qua.' },
            { word: 'mission', ipa: '/ˈmɪʃn/', pos: 'n', meaning_vi: 'nhiệm vụ', example_en: 'The mission to Mars was a success.', example_vi: 'Nhiệm vụ lên sao Hỏa đã thành công.' },
            { word: 'telescope', ipa: '/ˈtelɪskəʊp/', pos: 'n', meaning_vi: 'kính thiên văn', example_en: 'We can see stars through a telescope.', example_vi: 'Chúng ta có thể nhìn thấy các vì sao qua kính thiên văn.' },
            { word: 'universe', ipa: '/ˈjuːnɪvɜːs/', pos: 'n', meaning_vi: 'vũ trụ', example_en: 'The universe is vast and mysterious.', example_vi: 'Vũ trụ thật bao la và bí ẩn.' },
            { word: 'launch', ipa: '/lɔːntʃ/', pos: 'v/n', meaning_vi: 'phóng', example_en: 'The rocket launch was spectacular.', example_vi: 'Vụ phóng tên lửa thật ngoạn mục.' },
            { word: 'habitable', ipa: '/ˈhæbɪtəbl/', pos: 'adj', meaning_vi: 'có thể ở được', example_en: 'Scientists are looking for habitable planets.', example_vi: 'Các nhà khoa học đang tìm kiếm các hành tinh có thể ở được.' },
            { word: 'satellite', ipa: '/ˈsætəlaɪt/', pos: 'n', meaning_vi: 'vệ tinh', example_en: 'The moon is a natural satellite of the Earth.', example_vi: 'Mặt trăng là một vệ tinh tự nhiên của Trái Đất.' },
            { word: 'astronomy', ipa: '/əˈstrɒnəmi/', pos: 'n', meaning_vi: 'thiên văn học', example_en: 'She is studying astronomy at university.', example_vi: 'Cô ấy đang học thiên văn học tại trường đại học.' },
            { word: 'cosmonaut', ipa: '/ˈkɒzmənɔːt/', pos: 'n', meaning_vi: 'phi hành gia (Nga)', example_en: 'Yuri Gagarin was the first cosmonaut.', example_vi: 'Yuri Gagarin là phi hành gia đầu tiên.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Past perfect & Relative clauses (Review)',
          order: 2,
          objectives: ['Sử dụng thì quá khứ hoàn thành và mệnh đề quan hệ'],
          type: 'grammar',
          grammar: {
            title: 'Past perfect & Relative clauses',
            content: `
### 1. Thì Quá khứ hoàn thành (Past perfect)
- **Cách dùng:** Diễn tả một hành động đã xảy ra và hoàn tất trước một hành động khác trong quá khứ, hoặc trước một thời điểm trong quá khứ.
- **Cấu trúc:** S + had + V3/ed
- **Dấu hiệu nhận biết:** before, after, by the time, when...
- **Ví dụ:**
  - By the time we arrived at the cinema, the film **had started**. (Khi chúng tôi đến rạp, bộ phim đã bắt đầu rồi.)
  - After she **had finished** her homework, she went to bed. (Sau khi làm xong bài tập, cô ấy đi ngủ.)

### 2. Mệnh đề quan hệ xác định và không xác định
- **Mệnh đề quan hệ xác định (Defining relative clauses):** Cung cấp thông tin cần thiết để xác định danh từ đứng trước. Không có dấu phẩy.
  - Ví dụ: The man **who is talking to my father** is my teacher.
- **Mệnh đề quan hệ không xác định (Non-defining relative clauses):** Cung cấp thêm thông tin phụ, không bắt buộc phải có. Được ngăn cách bằng dấu phẩy. Không dùng "that".
  - Ví dụ: Mr. Smith, **who is my neighbor**, is very kind.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Space Exploration',
          order: 3,
          objectives: ['Đọc hiểu về du hành vũ trụ'],
          type: 'reading',
          reading: {
            title: 'A Journey into Space',
            passage: "Space exploration has always fascinated humanity. In 1961, Yuri Gagarin, a Russian cosmonaut, became the first human to journey into outer space. His spacecraft, Vostok 1, completed one orbit of the Earth. Eight years later, in 1969, the American Apollo 11 mission successfully landed the first humans on the Moon. Neil Armstrong's famous words, 'That's one small step for man, one giant leap for mankind,' echoed around the world. Today, astronauts from various countries live and work on the International Space Station (ISS), conducting important scientific research. Living in space is challenging. Astronauts experience weightlessness, which can affect their muscles and bones. They have to exercise daily and eat specially prepared food. Despite the difficulties, space travel continues to inspire us to explore the unknown universe.",
            questions: [
              { question: 'Who was the first human to journey into outer space?', options: ['Neil Armstrong', 'Yuri Gagarin', 'An American astronaut'], answer: 'Yuri Gagarin' },
              { question: 'What did Vostok 1 do?', options: ['Landed on the Moon', 'Completed one orbit of the Earth', 'Travelled to Mars'], answer: 'Completed one orbit of the Earth' },
              { question: 'When did the Apollo 11 mission land on the Moon?', options: ['In 1961', 'In 1969', 'In 1996'], answer: 'In 1969' },
              { question: 'What do astronauts do on the International Space Station?', options: ['They go on vacation', 'They conduct scientific research', 'They build new spacecraft'], answer: 'They conduct scientific research' },
              { question: 'Why do astronauts have to exercise daily in space?', options: ['Because they have too much free time', 'Because weightlessness can affect their muscles and bones', 'Because they want to lose weight'], answer: 'Because weightlessness can affect their muscles and bones' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit11',
      title: 'Unit 11: Changing Roles in Society',
      order: 11,
      description: 'Từ vựng về vai trò xã hội. Ngữ pháp: Thì tương lai hoàn thành, Câu bị động với các thì tương lai.',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Society',
          order: 1,
          objectives: ['Từ vựng về công việc và vai trò nam nữ'],
          type: 'vocabulary',
          words: [
            { word: 'breadwinner', ipa: '/ˈbredwɪnə(r)/', pos: 'n', meaning_vi: 'trụ cột gia đình', example_en: 'In many families, both parents are breadwinners.', example_vi: 'Trong nhiều gia đình, cả bố và mẹ đều là trụ cột.' },
            { word: 'homemaker', ipa: '/ˈhəʊmmeɪkə(r)/', pos: 'n', meaning_vi: 'người nội trợ', example_en: 'He decided to be a homemaker to take care of the kids.', example_vi: 'Anh ấy quyết định làm nội trợ để chăm sóc lũ trẻ.' },
            { word: 'gender equality', ipa: '/ˈdʒendə(r) iˈkwɒləti/', pos: 'n', meaning_vi: 'bình đẳng giới', example_en: 'We should promote gender equality.', example_vi: 'Chúng ta nên thúc đẩy bình đẳng giới.' },
            { word: 'burden', ipa: '/ˈbɜːdn/', pos: 'n', meaning_vi: 'gánh nặng', example_en: 'Housework should not be a burden for women.', example_vi: 'Việc nhà không nên là gánh nặng đối với phụ nữ.' },
            { word: 'contribution', ipa: '/ˌkɒntrɪˈbjuːʃn/', pos: 'n', meaning_vi: 'sự đóng góp', example_en: 'Women make a great contribution to society.', example_vi: 'Phụ nữ đóng góp to lớn cho xã hội.' },
            { word: 'financial', ipa: '/faɪˈnænʃl/', pos: 'adj', meaning_vi: 'thuộc về tài chính', example_en: 'They are facing financial difficulties.', example_vi: 'Họ đang đối mặt với những khó khăn tài chính.' },
            { word: 'independently', ipa: '/ˌɪndɪˈpendəntli/', pos: 'adv', meaning_vi: 'một cách độc lập', example_en: 'She lives and works independently.', example_vi: 'Cô ấy sống và làm việc một cách độc lập.' },
            { word: 'participation', ipa: '/pɑːˌtɪsɪˈpeɪʃn/', pos: 'n', meaning_vi: 'sự tham gia', example_en: 'We encourage the participation of all students.', example_vi: 'Chúng tôi khuyến khích sự tham gia của tất cả học sinh.' },
            { word: 'vision', ipa: '/ˈvɪʒn/', pos: 'n', meaning_vi: 'tầm nhìn', example_en: 'The leader has a clear vision for the future.', example_vi: 'Người lãnh đạo có một tầm nhìn rõ ràng cho tương lai.' },
            { word: 'hands-on', ipa: '/ˌhændz ˈɒn/', pos: 'adj', meaning_vi: 'thực tế, thực hành', example_en: 'The course provides hands-on experience.', example_vi: 'Khóa học cung cấp trải nghiệm thực tế.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Future perfect & Passive voice with future tenses',
          order: 2,
          objectives: ['Sử dụng thì tương lai hoàn thành và câu bị động ở tương lai'],
          type: 'grammar',
          grammar: {
            title: 'Future perfect & Passive voice',
            content: `
### 1. Thì Tương lai hoàn thành (Future perfect)
- **Cách dùng:** Diễn tả một hành động sẽ hoàn thành trước một thời điểm hoặc một hành động khác trong tương lai.
- **Cấu trúc:** S + will have + V3/ed
- **Dấu hiệu nhận biết:** by + thời gian trong tương lai (by tomorrow, by next year...), by the time + S + V(hiện tại đơn).
- **Ví dụ:**
  - By next month, I **will have finished** this project. (Tính đến tháng sau, tôi sẽ hoàn thành xong dự án này.)
  - By the time you arrive, they **will have left**. (Lúc bạn đến thì họ đã đi rồi.)

### 2. Câu bị động với các thì tương lai
- **Tương lai đơn:** S + will be + V3/ed (+ by O)
  - Ví dụ: A new school **will be built** here next year.
- **Tương lai hoàn thành:** S + will have been + V3/ed (+ by O)
  - Ví dụ: The report **will have been finished** by 5 PM tomorrow.
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Changing Roles',
          order: 3,
          objectives: ['Đọc hiểu về sự thay đổi vai trò trong xã hội'],
          type: 'reading',
          reading: {
            title: 'Women in the Modern World',
            passage: "In the past, men were traditionally the sole breadwinners of the family, while women were expected to be homemakers, taking care of children and doing housework. However, the roles of men and women in society have changed significantly over the last few decades. Today, more and more women are pursuing higher education and entering the workforce. They are taking on leadership roles in various fields, from business to politics. This shift has led to a more equal sharing of financial responsibilities and household chores between husbands and wives. Many men are now actively involved in raising children and managing the home. Despite these positive changes, gender equality has not been fully achieved everywhere. Women still face challenges such as the gender pay gap and balancing work and family life. Continued efforts are needed to ensure equal opportunities for everyone.",
            questions: [
              { question: 'What was the traditional role of men in the past?', options: ['Homemakers', 'The sole breadwinners', 'Teachers'], answer: 'The sole breadwinners' },
              { question: 'What are more women doing today?', options: ['Staying at home', 'Pursuing higher education and entering the workforce', 'Only doing housework'], answer: 'Pursuing higher education and entering the workforce' },
              { question: 'What has the shift in roles led to?', options: ['Women doing all the work', 'Men stopping working', 'A more equal sharing of financial responsibilities and household chores'], answer: 'A more equal sharing of financial responsibilities and household chores' },
              { question: 'What is one of the challenges women still face?', options: ['They are not allowed to study', 'The gender pay gap', 'They cannot vote'], answer: 'The gender pay gap' },
              { question: 'What is needed to ensure equal opportunities?', options: ['Continued efforts', 'Less education', 'More traditional roles'], answer: 'Continued efforts' }
            ]
          }
        }
      ]
    },
    {
      id: 'unit12',
      title: 'Unit 12: My Future Career',
      order: 12,
      description: 'Từ vựng về nghề nghiệp. Ngữ pháp: Động từ đi với to-infinitive và V-ing (ôn tập).',
      lessons: [
        {
          id: 'lesson1',
          title: 'Lesson 1: Vocabulary - Careers',
          order: 1,
          objectives: ['Từ vựng về các loại công việc và kỹ năng'],
          type: 'vocabulary',
          words: [
            { word: 'profession', ipa: '/prəˈfeʃn/', pos: 'n', meaning_vi: 'nghe nghiệp', example_en: 'Teaching is a noble profession.', example_vi: 'Dạy học là một nghề cao quý.' },
            { word: 'qualification', ipa: '/ˌkwɒlɪfɪˈkeɪʃn/', pos: 'n', meaning_vi: 'bằng cấp, trình độ chuyên môn', example_en: 'What qualifications do you need for this job?', example_vi: 'Bạn cần những bằng cấp gì cho công việc này?' },
            { word: 'apprentice', ipa: '/əˈprentɪs/', pos: 'n', meaning_vi: 'người học việc', example_en: 'He is an apprentice in a car factory.', example_vi: 'Anh ấy là một người học việc trong một nhà máy ô tô.' },
            { word: 'vocational', ipa: '/vəʊˈkeɪʃənl/', pos: 'adj', meaning_vi: 'thuộc về nghề nghiệp', example_en: 'He is attending a vocational school.', example_vi: 'Anh ấy đang theo học một trường nghề.' },
            { word: 'entrepreneur', ipa: '/ˌɒntrəprəˈnɜː(r)/', pos: 'n', meaning_vi: 'nhà khởi nghiệp', example_en: 'She is a successful entrepreneur.', example_vi: 'Cô ấy là một nhà khởi nghiệp thành công.' },
            { word: 'salary', ipa: '/ˈsæləri/', pos: 'n', meaning_vi: 'lương', example_en: 'The job offers a high salary.', example_vi: 'Công việc đưa ra mức lương cao.' },
            { word: 'flexible', ipa: '/ˈfleksəbl/', pos: 'adj', meaning_vi: 'linh hoạt', example_en: 'I have flexible working hours.', example_vi: 'Tôi có giờ làm việc linh hoạt.' },
            { word: 'challenging', ipa: '/ˈtʃælɪndʒɪŋ/', pos: 'adj', meaning_vi: 'đầy thử thách', example_en: 'The new project is very challenging.', example_vi: 'Dự án mới rất đầy thử thách.' },
            { word: 'rewarding', ipa: '/rɪˈwɔːdɪŋ/', pos: 'adj', meaning_vi: 'đáng làm, bổ ích', example_en: 'Nursing is a rewarding career.', example_vi: 'Điều dưỡng là một nghề nghiệp bổ ích.' },
            { word: 'workforce', ipa: '/ˈwɜːkfɔːs/', pos: 'n', meaning_vi: 'lực lượng lao động', example_en: 'The company has a diverse workforce.', example_vi: 'Công ty có một lực lượng lao động đa dạng.' }
          ]
        },
        {
          id: 'lesson2',
          title: 'Lesson 2: Grammar - Verbs followed by to-infinitive or V-ing',
          order: 2,
          objectives: ['Sử dụng đúng động từ theo sau bởi to-V hoặc V-ing'],
          type: 'grammar',
          grammar: {
            title: 'Verbs + to-infinitive / V-ing',
            content: `
### 1. Động từ + to-infinitive (to V)
- Các động từ thường gặp: agree, decide, expect, hope, plan, promise, refuse, want, would like...
- **Ví dụ:** I **decided to study** medicine. (Tôi đã quyết định học y.)

### 2. Động từ + V-ing
- Các động từ thường gặp: admit, avoid, consider, deny, enjoy, finish, mind, practice, suggest...
- **Ví dụ:** She **enjoys working** with children. (Cô ấy thích làm việc với trẻ em.)

### 3. Động từ + to-infinitive / V-ing (không đổi nghĩa)
- Các động từ thường gặp: begin, start, continue, like, love, hate, prefer...
- **Ví dụ:** It **started to rain** / It **started raining**.

### 4. Động từ + to-infinitive / V-ing (khác nghĩa)
- **Remember / Forget / Regret:**
  - + to V: Nhớ / Quên / Tiếc sẽ phải làm gì (hành động chưa xảy ra).
  - + V-ing: Nhớ / Quên / Tiếc đã làm gì (hành động đã xảy ra).
- **Stop:**
  - + to V: Dừng lại để làm việc khác. (He stopped to smoke.)
  - + V-ing: Dừng hẳn việc đang làm. (He stopped smoking.)
- **Try:**
  - + to V: Cố gắng làm gì. (I tried to open the door.)
  - + V-ing: Thử làm gì. (Try using a different key.)
            `
          }
        },
        {
          id: 'lesson3',
          title: 'Lesson 3: Reading - Choosing a Career',
          order: 3,
          objectives: ['Đọc hiểu về việc lựa chọn nghề nghiệp tương lai'],
          type: 'reading',
          reading: {
            title: 'Choosing Your Future Career',
            passage: "Choosing a career is one of the most important decisions you will make in your life. It is not just about finding a job to earn money; it is about finding a profession that matches your interests, skills, and values. When considering your future career, you should first think about what you enjoy doing. Are you interested in technology, arts, healthcare, or business? Next, assess your strengths and weaknesses. What subjects are you good at? What skills do you have? It is also helpful to research different occupations to understand their educational requirements, working conditions, and potential salary. You can talk to career counselors, teachers, or professionals in the fields you are interested in. Remember that your career path may not be a straight line. You might change jobs or even professions as you gain more experience and your interests evolve. The most important thing is to be flexible and willing to learn new things.",
            questions: [
              { question: 'What is choosing a career about, besides earning money?', options: ['Finding a job near your home', 'Finding a profession that matches your interests, skills, and values', 'Working as little as possible'], answer: 'Finding a profession that matches your interests, skills, and values' },
              { question: 'What should you think about first when considering a career?', options: ['How much money you will make', 'What your parents want you to do', 'What you enjoy doing'], answer: 'What you enjoy doing' },
              { question: 'Why is it helpful to research different occupations?', options: ['To understand their educational requirements, working conditions, and potential salary', 'To find the easiest job', 'To avoid going to university'], answer: 'To understand their educational requirements, working conditions, and potential salary' },
              { question: 'Who can you talk to for advice?', options: ['Only your friends', 'Career counselors, teachers, or professionals', 'Nobody'], answer: 'Career counselors, teachers, or professionals' },
              { question: 'What is the most important thing to remember about your career path?', options: ['It will never change', 'You must stick to your first choice', 'Be flexible and willing to learn new things'], answer: 'Be flexible and willing to learn new things' }
            ]
          }
        }
      ]
    }
  ]
};
