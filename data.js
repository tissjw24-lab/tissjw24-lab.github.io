// Data Generation for Ulsan Technical High School Apprenticeship Management System

// Korean name components
const surnames = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '한', '오', '서', '신', '권', '황', '안', '송', '전', '홍'];
const givenNames = [
  '민준', '서준', '예준', '도윤', '시우', '주원', '하준', '지호', '지우', '준서',
  '서연', '서윤', '지우', '서현', '민서', '하은', '지민', '수빈', '예은', '지유',
  '현우', '건우', '우진', '선우', '연우', '정우', '승우', '승현', '시윤', '준혁',
  '수아', '윤서', '채원', '지안', '다은', '은서', '소율', '채은', '예린', '지원',
  '태양', '민재', '재윤', '동현', '성민', '재현', '지훈', '현준', '승민', '유준'
];

// Generate random Korean name
function generateKoreanName() {
  const surname = surnames[Math.floor(Math.random() * surnames.length)];
  const givenName = givenNames[Math.floor(Math.random() * givenNames.length)];
  return surname + givenName;
}

// Generate phone number
function generatePhoneNumber() {
  const middle = String(Math.floor(Math.random() * 9000) + 1000);
  const last = String(Math.floor(Math.random() * 9000) + 1000);
  return `010-${middle}-${last}`;
}

// Company data by class
const companiesByClass = {
  '3-4': [
    { name: '(주)현대모비스 협력사', address: '울산광역시 북구 산업로 123', industry: '자동차부품' },
    { name: '대성정밀', address: '울산광역시 남구 테크노산업로 45', industry: '기계가공' },
    { name: '현대중공업 사내협력사', address: '울산광역시 동구 방어진순환도로 400', industry: '조선기계' },
    { name: '삼성정밀공업', address: '울산광역시 울주군 온산읍 산업로 78', industry: '금형제작' },
    { name: '태광정밀', address: '울산광역시 북구 진장2길 34', industry: '기계가공' },
    { name: '동아기계', address: '울산광역시 남구 돋질로 156', industry: 'CNC가공' },
    { name: '(주)케이엠', address: '울산광역시 울주군 청량읍 공단로 90', industry: '자동차부품' },
    { name: '현대정공', address: '울산광역시 동구 일산로 234', industry: '기계부품' },
    { name: '우성산업', address: '울산광역시 북구 산업로 567', industry: '금형' },
    { name: '(주)디에스', address: '울산광역시 남구 여천로 89', industry: '정밀가공' }
  ],
  '3-5': [
    { name: '우신산업', address: '울산광역시 울주군 온산읍 회학3길 12', industry: '기계가공' },
    { name: '금강기계', address: '울산광역시 북구 효문로 234', industry: '금형제작' },
    { name: '(주)티에스이', address: '울산광역시 남구 산업로 345', industry: '자동차부품' },
    { name: '한일정밀', address: '울산광역시 동구 봉수로 123', industry: 'CNC가공' },
    { name: '(주)에이치케이', address: '울산광역시 울주군 청량읍 율리3길 45', industry: '기계부품' },
    { name: '세진산업', address: '울산광역시 북구 진장1길 78', industry: '금형' },
    { name: '대한기계', address: '울산광역시 남구 테크노산업로 234', industry: '정밀가공' },
    { name: '(주)유니크', address: '울산광역시 동구 방어진순환도로 567', industry: '자동차부품' },
    { name: '신성정밀', address: '울산광역시 울주군 온산읍 산업로 890', industry: '기계가공' }
  ],
  '2-4': [
    { name: '삼우정밀', address: '울산광역시 북구 산업로 901', industry: '금형제작' },
    { name: '한국몰드', address: '울산광역시 남구 돋질로 234', industry: '금형' },
    { name: '세진메카트로닉스', address: '울산광역시 울주군 청량읍 공단로 456', industry: '기계부품' },
    { name: '(주)동양정밀', address: '울산광역시 동구 일산로 678', industry: 'CNC가공' },
    { name: '태성기계', address: '울산광역시 북구 효문로 123', industry: '기계가공' },
    { name: '(주)케이티', address: '울산광역시 남구 여천로 345', industry: '자동차부품' },
    { name: '현대정밀', address: '울산광역시 울주군 온산읍 회학3길 567', industry: '금형제작' },
    { name: '대우기계', address: '울산광역시 동구 봉수로 789', industry: '정밀가공' },
    { name: '(주)에스엠', address: '울산광역시 북구 진장2길 901', industry: '기계부품' },
    { name: '삼성기계', address: '울산광역시 남구 테크노산업로 123', industry: 'CNC가공' }
  ],
  '2-5': [
    { name: '에이치엠엘', address: '울산광역시 울주군 청량읍 율리3길 234', industry: '기계가공' },
    { name: '(주)동남정밀', address: '울산광역시 북구 산업로 456', industry: '금형' },
    { name: '유니테크', address: '울산광역시 남구 돋질로 678', industry: '자동차부품' },
    { name: '(주)코리아', address: '울산광역시 동구 방어진순환도로 890', industry: '정밀가공' },
    { name: '한성정밀', address: '울산광역시 울주군 온산읍 산업로 123', industry: 'CNC가공' },
    { name: '(주)엠케이', address: '울산광역시 북구 효문로 345', industry: '기계부품' },
    { name: '동부기계', address: '울산광역시 남구 여천로 567', industry: '금형제작' },
    { name: '(주)제이에스', address: '울산광역시 동구 일산로 789', industry: '기계가공' },
    { name: '태평양정밀', address: '울산광역시 울주군 청량읍 공단로 901', industry: '자동차부품' },
    { name: '(주)비엠', address: '울산광역시 북구 진장1길 234', industry: '정밀가공' }
  ]
};

// Mentor names
const mentorNames = [
  '김철수', '이영희', '박민수', '최지영', '정현우', '강수진', '조민호', '윤서연',
  '장동건', '임수정', '한지민', '오정세', '서강준', '신민아', '권상우', '황정민',
  '안성기', '송강호', '전지현', '홍길동', '김태희', '이병헌', '박보검', '최우식'
];

// Certificate types
const certificates = [
  '선반기능사',
  '밀링기능사',
  '컴퓨터응용가공산업기사',
  '금형기능사',
  '전산응용기계제도기능사',
  '용접기능사',
  'CNC선반기능사',
  '기계가공조립기능사',
  '기계설계산업기사',
  '품질경영기사'
];

// Consultation topics
const consultationTopics = [
  '진로 상담', '학업 상담', '생활 지도', '취업 준비', '자격증 취득 계획',
  '기업 적응 상담', '가정 문제 상담', '교우 관계', '성적 향상 방안', '출결 관리'
];

// Teacher data (8 teachers: 1 head, 4 homeroom, 3 coordinators)
const teachersData = [
  {
    id: 1,
    name: '김철수',
    position: '도제부장',
    role: '부장',
    phone: '010-1234-5678',
    email: 'kim.cs@ulsan-tech.hs.kr',
    subject: '기계가공',
    experience: '15년',
    photo: 'https://via.placeholder.com/200?text=김철수',
    responsibilities: ['도제부 총괄', '기업 협력 관계 관리', '도제 프로그램 기획 및 운영'],
    introduction: '15년간 기계가공 분야에서 학생들을 지도해온 경험을 바탕으로 도제부를 이끌고 있습니다. 학생들이 현장에서 필요한 실무 능력을 갖출 수 있도록 최선을 다하겠습니다.'
  },
  {
    id: 2,
    name: '이영희',
    position: '담임교사',
    role: '담임',
    class: '3학년 4반',
    phone: '010-2345-6789',
    email: 'lee.yh@ulsan-tech.hs.kr',
    subject: '금형제작',
    experience: '12년',
    photo: 'https://via.placeholder.com/200?text=이영희',
    responsibilities: ['3학년 4반 담임', '학생 생활지도', '진로 상담'],
    introduction: '금형제작 분야의 전문성을 바탕으로 학생들의 꿈을 실현할 수 있도록 돕고 있습니다. 학생 한 명 한 명의 성장을 최우선으로 생각합니다.'
  },
  {
    id: 3,
    name: '박민수',
    position: '담임교사',
    role: '담임',
    class: '3학년 5반',
    phone: '010-3456-7890',
    email: 'park.ms@ulsan-tech.hs.kr',
    subject: 'CNC가공',
    experience: '10년',
    photo: 'https://via.placeholder.com/200?text=박민수',
    responsibilities: ['3학년 5반 담임', '자격증 취득 지도', '현장실습 관리'],
    introduction: 'CNC가공 기술을 학생들에게 전수하며, 실무 중심의 교육을 실천하고 있습니다. 학생들이 산업 현장에서 인정받는 기술인이 되도록 지도하겠습니다.'
  },
  {
    id: 4,
    name: '최지영',
    position: '담임교사',
    role: '담임',
    class: '2학년 4반',
    phone: '010-4567-8901',
    email: 'choi.jy@ulsan-tech.hs.kr',
    subject: '기계설계',
    experience: '8년',
    photo: 'https://via.placeholder.com/200?text=최지영',
    responsibilities: ['2학년 4반 담임', '기초 기술 교육', '학생 상담'],
    introduction: '기계설계의 기초부터 응용까지 체계적으로 가르치며, 학생들의 창의성을 키우는 데 중점을 두고 있습니다.'
  },
  {
    id: 5,
    name: '정현우',
    position: '담임교사',
    role: '담임',
    class: '2학년 5반',
    phone: '010-5678-9012',
    email: 'jung.hw@ulsan-tech.hs.kr',
    subject: '용접',
    experience: '11년',
    photo: 'https://via.placeholder.com/200?text=정현우',
    responsibilities: ['2학년 5반 담임', '안전교육', '기술 지도'],
    introduction: '용접 분야의 풍부한 현장 경험을 학생들과 공유하며, 안전하고 정확한 기술 습득을 최우선으로 지도합니다.'
  },
  {
    id: 6,
    name: '강수진',
    position: '전담관',
    role: '전담관',
    phone: '010-6789-0123',
    email: 'kang.sj@ulsan-tech.hs.kr',
    subject: '도제 행정',
    experience: '7년',
    photo: 'https://via.placeholder.com/200?text=강수진',
    responsibilities: ['기업 연계 업무', '현장실습 일정 관리', '학생-기업 매칭'],
    introduction: '학생들과 기업을 연결하는 가교 역할을 하며, 원활한 도제 프로그램 운영을 위해 노력하고 있습니다.'
  },
  {
    id: 7,
    name: '조민호',
    position: '전담관',
    role: '전담관',
    phone: '010-7890-1234',
    email: 'cho.mh@ulsan-tech.hs.kr',
    subject: '취업 지도',
    experience: '9년',
    photo: 'https://via.placeholder.com/200?text=조민호',
    responsibilities: ['취업 상담', '이력서 작성 지도', '면접 준비'],
    introduction: '학생들의 성공적인 취업을 위해 체계적인 취업 준비 프로그램을 운영하고 있습니다.'
  },
  {
    id: 8,
    name: '윤서연',
    position: '전담관',
    role: '전담관',
    phone: '010-8901-2345',
    email: 'yoon.sy@ulsan-tech.hs.kr',
    subject: '자격증 관리',
    experience: '6년',
    photo: 'https://via.placeholder.com/200?text=윤서연',
    responsibilities: ['자격증 취득 계획 수립', '시험 일정 관리', '학습 지원'],
    introduction: '학생들의 자격증 취득을 체계적으로 관리하며, 목표 달성을 위한 맞춤형 학습 계획을 제공합니다.'
  }
];

// Annual events data
const annualEventsData = [
  {
    month: 3,
    events: [
      { date: '3월 2일', title: '신학기 개학식', type: '학사', description: '2025학년도 1학기 시작' },
      { date: '3월 4-8일', title: '도제 기업 오리엔테이션', type: '도제', description: '신규 배치 학생 기업 방문 및 안내' },
      { date: '3월 15일', title: '산업안전보건교육', type: '안전', description: '전체 도제반 학생 대상 안전교육' },
      { date: '3월 25일', title: '학부모 간담회', type: '행사', description: '도제 프로그램 설명회' }
    ]
  },
  {
    month: 4,
    events: [
      { date: '4월 10일', title: '자격증 취득 설명회', type: '자격증', description: '상반기 자격증 시험 안내' },
      { date: '4월 20-21일', title: '기업 현장 방문의 날', type: '도제', description: '학부모 및 교사 기업 방문' },
      { date: '4월 28일', title: '1차 기업 평가회', type: '평가', description: '기업 멘토 평가 및 피드백' }
    ]
  },
  {
    month: 5,
    events: [
      { date: '5월 5일', title: '어린이날 (휴무)', type: '휴무', description: '공휴일' },
      { date: '5월 12-16일', title: '자격증 시험 주간', type: '자격증', description: '각종 기능사 시험 응시' },
      { date: '5월 30일', title: '도제 우수사례 발표대회', type: '행사', description: '학생 우수사례 공유' }
    ]
  },
  {
    month: 6,
    events: [
      { date: '6월 6일', title: '현충일 (휴무)', type: '휴무', description: '공휴일' },
      { date: '6월 15일', title: '중간 평가회', type: '평가', description: '1학기 중간 평가 및 상담' },
      { date: '6월 25일', title: '진로 박람회', type: '행사', description: '기업 채용 설명회' }
    ]
  },
  {
    month: 7,
    events: [
      { date: '7월 10일', title: '1학기 종업식', type: '학사', description: '1학기 마무리' },
      { date: '7월 15일', title: '여름방학 시작', type: '학사', description: '방학 중 현장실습 지속' },
      { date: '7월 20일', title: '하계 집중 교육', type: '교육', description: '심화 기술 교육 프로그램' }
    ]
  },
  {
    month: 8,
    events: [
      { date: '8월 5-9일', title: '기업 인턴십 주간', type: '도제', description: '집중 현장실습 기간' },
      { date: '8월 15일', title: '광복절 (휴무)', type: '휴무', description: '공휴일' },
      { date: '8월 25일', title: '2학기 개학 준비', type: '학사', description: '개학 전 점검' }
    ]
  },
  {
    month: 9,
    events: [
      { date: '9월 1일', title: '2학기 개학식', type: '학사', description: '2학기 시작' },
      { date: '9월 10일', title: '추석 연휴', type: '휴무', description: '추석 명절' },
      { date: '9월 25일', title: '2차 기업 평가회', type: '평가', description: '2학기 초 평가' }
    ]
  },
  {
    month: 10,
    events: [
      { date: '10월 3일', title: '개천절 (휴무)', type: '휴무', description: '공휴일' },
      { date: '10월 9일', title: '한글날 (휴무)', type: '휴무', description: '공휴일' },
      { date: '10월 15-19일', title: '자격증 시험 주간', type: '자격증', description: '하반기 자격증 시험' },
      { date: '10월 28일', title: '도제 체육대회', type: '행사', description: '학생-기업 친선 체육대회' }
    ]
  },
  {
    month: 11,
    events: [
      { date: '11월 5일', title: '취업 박람회', type: '행사', description: '3학년 대상 채용 박람회' },
      { date: '11월 15일', title: '기업 간담회', type: '도제', description: '기업 멘토 간담회' },
      { date: '11월 25일', title: '3차 기업 평가회', type: '평가', description: '2학기 중간 평가' }
    ]
  },
  {
    month: 12,
    events: [
      { date: '12월 10일', title: '도제 성과 발표회', type: '행사', description: '연간 성과 공유' },
      { date: '12월 20일', title: '2학기 종업식', type: '학사', description: '2학기 마무리' },
      { date: '12월 25일', title: '성탄절 (휴무)', type: '휴무', description: '공휴일' },
      { date: '12월 31일', title: '겨울방학 시작', type: '학사', description: '방학 중 현장실습 지속' }
    ]
  },
  {
    month: 1,
    events: [
      { date: '1월 1일', title: '신정 (휴무)', type: '휴무', description: '공휴일' },
      { date: '1월 15일', title: '동계 집중 교육', type: '교육', description: '신기술 교육 프로그램' },
      { date: '1월 28-30일', title: '설날 연휴', type: '휴무', description: '설 명절' }
    ]
  },
  {
    month: 2,
    events: [
      { date: '2월 5일', title: '졸업식 (3학년)', type: '학사', description: '3학년 졸업' },
      { date: '2월 10일', title: '학년말 평가회', type: '평가', description: '연간 종합 평가' },
      { date: '2월 20일', title: '신학기 준비', type: '학사', description: '새 학년 준비' }
    ]
  }
];

// Teacher names
const teacherNames = [
  '김선생', '이선생', '박선생', '최선생', '정선생', '강선생', '조선생', '윤선생'
];

// Generate students by class
function generateStudents() {
  const students = [];
  let studentId = 1;

  const classConfig = [
    { grade: 3, classNum: 4, count: 20, classKey: '3-4' },
    { grade: 3, classNum: 5, count: 18, classKey: '3-5' },
    { grade: 2, classNum: 4, count: 19, classKey: '2-4' },
    { grade: 2, classNum: 5, count: 20, classKey: '2-5' }
  ];

  classConfig.forEach(config => {
    const companies = companiesByClass[config.classKey];
    const teacher = teacherNames[Math.floor(Math.random() * teacherNames.length)];

    for (let i = 0; i < config.count; i++) {
      const company = companies[i % companies.length];
      const mentor = mentorNames[Math.floor(Math.random() * mentorNames.length)];

      // Generate 2-4 certificates per student
      const certCount = Math.floor(Math.random() * 3) + 2;
      const studentCerts = [];
      const shuffledCerts = [...certificates].sort(() => Math.random() - 0.5);
      for (let j = 0; j < certCount; j++) {
        studentCerts.push({
          name: shuffledCerts[j],
          date: `202${Math.floor(Math.random() * 2) + 4}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`
        });
      }

      // Generate consultation logs
      const consultations = [];
      const consultCount = Math.floor(Math.random() * 4) + 2;
      for (let j = 0; j < consultCount; j++) {
        consultations.push({
          date: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
          topic: consultationTopics[Math.floor(Math.random() * consultationTopics.length)],
          notes: '상담 내용 기록'
        });
      }

      // Generate attendance records (last 30 days)
      const attendance = [];
      const today = new Date();
      for (let j = 0; j < 30; j++) {
        const date = new Date(today);
        date.setDate(date.getDate() - j);
        const dayOfWeek = date.getDay();

        // Skip weekends
        if (dayOfWeek === 0 || dayOfWeek === 6) continue;

        const statuses = ['출석', '출석', '출석', '출석', '출석', '지각', '결석', '현장실습'];
        const schoolStatus = statuses[Math.floor(Math.random() * statuses.length)];
        const companyStatus = statuses[Math.floor(Math.random() * statuses.length)];

        attendance.push({
          date: date.toISOString().split('T')[0],
          school: schoolStatus,
          company: companyStatus
        });
      }

      const student = {
        id: studentId++,
        name: generateKoreanName(),
        grade: config.grade,
        class: config.classNum,
        photo: `https://via.placeholder.com/150?text=${config.grade}-${config.classNum}-${i + 1}`,
        contact: {
          student: generatePhoneNumber(),
          parent: generatePhoneNumber(),
          teacher: teacher,
          teacherPhone: generatePhoneNumber()
        },
        employment: {
          company: company.name,
          address: company.address,
          industry: company.industry,
          mentor: {
            name: mentor,
            phone: generatePhoneNumber(),
            position: ['부장', '과장', '대리', '팀장'][Math.floor(Math.random() * 4)]
          },
          startDate: `202${config.grade === 3 ? '4' : '5'}-03-02`
        },
        certificates: studentCerts,
        points: {
          merit: Math.floor(Math.random() * 30),
          demerit: Math.floor(Math.random() * 10),
          history: [
            { date: '2025-01-10', type: 'merit', amount: 5, reason: '봉사활동' },
            { date: '2025-01-05', type: 'merit', amount: 3, reason: '청소 우수' },
            { date: '2024-12-20', type: 'demerit', amount: 2, reason: '지각' }
          ]
        },
        consultations: consultations,
        attendance: attendance
      };

      students.push(student);
    }
  });

  return students;
}

// Generate notices
function generateNotices() {
  return [
    {
      id: 1,
      category: '긴급',
      title: '2025학년도 1학기 도제 기업 배치 안내',
      content: '신학기 도제 기업 배치가 완료되었습니다. 각 학생은 배정된 기업에 3월 4일까지 인사 방문 바랍니다.',
      date: '2025-01-15',
      author: '도제부장',
      attachments: []
    },
    {
      id: 2,
      category: '도제',
      title: '산업안전보건교육 실시 안내',
      content: '전체 도제반 학생 대상 산업안전보건교육을 실시합니다.',
      date: '2025-01-10',
      author: '안전담당',
      attachments: []
    },
    {
      id: 3,
      category: '일반',
      title: '자격증 취득 장려금 지급 안내',
      content: '2024년 하반기 자격증 취득 학생 대상 장려금을 지급합니다.',
      date: '2025-01-05',
      author: '교무부',
      attachments: []
    },
    {
      id: 4,
      category: '행사',
      title: '도제 우수사례 발표대회 개최',
      content: '2월 중 도제 우수사례 발표대회를 개최합니다. 각 반별 대표 1명씩 선발 바랍니다.',
      date: '2024-12-28',
      author: '도제부',
      attachments: []
    },
    {
      id: 5,
      category: '일반',
      title: '동계방학 중 기업 현장실습 안내',
      content: '방학 중에도 기업 현장실습은 정상 운영됩니다.',
      date: '2024-12-20',
      author: '도제부장',
      attachments: []
    }
  ];
}

// Generate home correspondence
function generateCorrespondence() {
  return [
    {
      id: 1,
      title: '2025학년도 1학기 학사일정 안내',
      date: '2025-01-15',
      targetClasses: ['3-4', '3-5', '2-4', '2-5'],
      status: '발송',
      confirmCount: 65,
      totalCount: 77,
      attachments: []
    },
    {
      id: 2,
      title: '도제 기업 현장실습 동의서',
      date: '2025-01-10',
      targetClasses: ['2-4', '2-5'],
      status: '발송',
      confirmCount: 35,
      totalCount: 39,
      attachments: []
    },
    {
      id: 3,
      title: '겨울방학 생활 안내',
      date: '2024-12-20',
      targetClasses: ['3-4', '3-5', '2-4', '2-5'],
      status: '확인',
      confirmCount: 77,
      totalCount: 77,
      attachments: []
    }
  ];
}

// Initialize data
const studentsData = generateStudents();
const noticesData = generateNotices();
const correspondenceData = generateCorrespondence();

// Export data
window.AppData = {
  students: studentsData,
  notices: noticesData,
  correspondence: correspondenceData,
  teachers: teachersData,
  annualEvents: annualEventsData,

  // Helper functions
  getStudentsByClass: function (grade, classNum) {
    return this.students.filter(s => s.grade === grade && s.class === classNum);
  },

  getStudentById: function (id) {
    return this.students.find(s => s.id === id);
  },

  getEmploymentRate: function (grade) {
    const gradeStudents = this.students.filter(s => s.grade === grade);
    const employed = gradeStudents.filter(s => s.employment.company).length;
    return gradeStudents.length > 0 ? (employed / gradeStudents.length * 100).toFixed(1) : 0;
  },

  getTotalStudents: function () {
    return this.students.length;
  },

  getEventsByMonth: function (month) {
    return this.annualEvents.find(e => e.month === month);
  },

  getTeachersByRole: function (role) {
    return this.teachers.filter(t => t.role === role);
  }
};

console.log('Data loaded:', window.AppData.getTotalStudents(), 'students');
