// Main Application Logic for Ulsan Technical High School Management System

// Current page state
let currentPage = 'intro';

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  initNavigation();
  loadPage('intro');
});

// Navigation setup
function initNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const page = this.getAttribute('data-page');

      // Update active state
      navButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Load page
      loadPage(page);
    });
  });
}

// Page loader
function loadPage(page) {
  currentPage = page;
  const content = document.getElementById('mainContent');

  switch (page) {
    case 'intro':
      content.innerHTML = renderIntroPage();
      break;
    case 'home':
      content.innerHTML = renderHomePage();
      // Initialize chart after DOM update
      setTimeout(initEmploymentChart, 100);
      break;
    case 'classes':
      content.innerHTML = renderClassesPage();
      break;
    case 'employment':
      content.innerHTML = renderEmploymentPage();
      break;
    case 'certificates':
      content.innerHTML = renderCertificatesPage();
      break;
    case 'events':
      content.innerHTML = renderEventsPage();
      break;
    case 'calendar':
      content.innerHTML = renderCalendarPage();
      break;
    case 'teachers':
      content.innerHTML = renderTeachersPage();
      break;
    case 'teacher-log':
      content.innerHTML = renderTeacherLogPage();
      break;
    case 'notices':
      content.innerHTML = renderNoticesPage();
      break;
    case 'correspondence':
      content.innerHTML = renderCorrespondencePage();
      break;
    default:
      content.innerHTML = '<h2>페이지를 찾을 수 없습니다</h2>';
  }
}

// ===== PAGE RENDERERS =====

// Intro Page - What is Apprenticeship
function renderIntroPage() {
  return `
    <div style="max-width: 1000px; margin: 0 auto;">
      <h2 class="page-title" style="text-align: center; font-size: 2.5rem; margin-bottom: var(--spacing-2xl);">
        일학습병행제(도제)란?
      </h2>
      
      <div class="card mb-2" style="background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%); color: white;">
        <div style="text-align: center; padding: var(--spacing-xl);">
          <div style="font-size: 3rem; margin-bottom: var(--spacing-lg);">🎓 + 💼</div>
          <h3 style="font-size: 1.75rem; margin-bottom: var(--spacing-md); color: white;">학교에서 배우고, 기업에서 실천하는</h3>
          <p style="font-size: 1.25rem; opacity: 0.95;">미래 기술인재 양성 프로그램</p>
        </div>
      </div>
      
      <div class="card mb-2">
        <div class="card-header">
          <h3 class="card-title">📖 도제란 무엇인가요?</h3>
        </div>
        <div class="card-body" style="font-size: 1.0625rem; line-height: 1.8;">
          <p style="margin-bottom: var(--spacing-lg);">
            <strong>일학습병행제(도제)</strong>는 학교에서의 이론 교육과 기업 현장에서의 실무 교육을 병행하는 
            <span style="color: var(--primary-blue); font-weight: 600;">산학일체형 인재양성 시스템</span>입니다.
          </p>
          <p style="margin-bottom: var(--spacing-lg);">
            학생들은 학교에서 기초 이론을 배우고, 협약 기업에서 실제 업무를 경험하며 
            <span style="color: var(--primary-blue); font-weight: 600;">현장 맞춤형 기술인재</span>로 성장합니다.
          </p>
          <p>
            독일, 스위스 등 선진국의 성공적인 도제 시스템을 한국 실정에 맞게 도입한 제도로, 
            청년 실업 해소와 중소기업 인력난 해결을 동시에 달성하는 <span style="color: var(--primary-blue); font-weight: 600;">Win-Win 프로그램</span>입니다.
          </p>
        </div>
      </div>
      
      <div class="card mb-2">
        <div class="card-header">
          <h3 class="card-title">🎯 도제의 특징</h3>
        </div>
        <div class="card-body">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--spacing-lg);">
            <div style="background: var(--bg-secondary); padding: var(--spacing-lg); border-radius: var(--radius-md); border-left: 4px solid var(--primary-blue);">
              <div style="font-size: 2rem; margin-bottom: var(--spacing-md);">📚</div>
              <h4 style="margin-bottom: var(--spacing-sm); color: var(--primary-blue);">이론과 실무의 조화</h4>
              <p style="color: var(--text-secondary);">학교에서 배운 이론을 기업 현장에서 바로 적용하며 실무 능력을 키웁니다.</p>
            </div>
            
            <div style="background: var(--bg-secondary); padding: var(--spacing-lg); border-radius: var(--radius-md); border-left: 4px solid var(--success);">
              <div style="font-size: 2rem; margin-bottom: var(--spacing-md);">👨‍🏫</div>
              <h4 style="margin-bottom: var(--spacing-sm); color: var(--success);">1:1 멘토링 시스템</h4>
              <p style="color: var(--text-secondary);">기업 현장의 숙련된 기술자가 멘토가 되어 개인별 맞춤 지도를 제공합니다.</p>
            </div>
            
            <div style="background: var(--bg-secondary); padding: var(--spacing-lg); border-radius: var(--radius-md); border-left: 4px solid var(--warning);">
              <div style="font-size: 2rem; margin-bottom: var(--spacing-md);">💰</div>
              <h4 style="margin-bottom: var(--spacing-sm); color: var(--warning);">훈련수당 지급</h4>
              <p style="color: var(--text-secondary);">기업 현장실습 기간 동안 훈련수당을 받으며 경제적 자립을 준비합니다.</p>
            </div>
            
            <div style="background: var(--bg-secondary); padding: var(--spacing-lg); border-radius: var(--radius-md); border-left: 4px solid var(--error);">
              <div style="font-size: 2rem; margin-bottom: var(--spacing-md);">🎓</div>
              <h4 style="margin-bottom: var(--spacing-sm); color: var(--error);">자격증 취득 지원</h4>
              <p style="color: var(--text-secondary);">체계적인 자격증 취득 프로그램으로 전문 기술인 자격을 갖춥니다.</p>
            </div>
            
            <div style="background: var(--bg-secondary); padding: var(--spacing-lg); border-radius: var(--radius-md); border-left: 4px solid var(--info);">
              <div style="font-size: 2rem; margin-bottom: var(--spacing-md);">💼</div>
              <h4 style="margin-bottom: var(--spacing-sm); color: var(--info);">취업 보장</h4>
              <p style="color: var(--text-secondary);">졸업 후 협약 기업에 우선 채용되어 안정적인 취업이 가능합니다.</p>
            </div>
            
            <div style="background: var(--bg-secondary); padding: var(--spacing-lg); border-radius: var(--radius-md); border-left: 4px solid #8b5cf6;">
              <div style="font-size: 2rem; margin-bottom: var(--spacing-md);">📈</div>
              <h4 style="margin-bottom: var(--spacing-sm); color: #8b5cf6;">경력 인정</h4>
              <p style="color: var(--text-secondary);">현장실습 기간이 실무 경력으로 인정되어 경력 개발에 유리합니다.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card mb-2">
        <div class="card-header">
          <h3 class="card-title">⚙️ 운영 방식</h3>
        </div>
        <div class="card-body">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-2xl); margin-bottom: var(--spacing-xl);">
            <div>
              <h4 style="color: var(--primary-blue); margin-bottom: var(--spacing-lg); font-size: 1.25rem;">📅 주간 일정</h4>
              <div style="background: var(--bg-secondary); padding: var(--spacing-lg); border-radius: var(--radius-md);">
                <div style="margin-bottom: var(--spacing-md); padding: var(--spacing-md); background: white; border-radius: var(--radius-sm);">
                  <strong>월요일 - 화요일</strong><br>
                  <span style="color: var(--text-secondary);">학교에서 이론 교육 (전공 과목, 일반 교양)</span>
                </div>
                <div style="margin-bottom: var(--spacing-md); padding: var(--spacing-md); background: white; border-radius: var(--radius-sm);">
                  <strong>수요일 - 금요일</strong><br>
                  <span style="color: var(--text-secondary);">기업 현장에서 실무 교육 (OJT)</span>
                </div>
                <div style="padding: var(--spacing-md); background: white; border-radius: var(--radius-sm);">
                  <strong>토요일 - 일요일</strong><br>
                  <span style="color: var(--text-secondary);">휴무 (자율 학습 및 휴식)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 style="color: var(--primary-blue); margin-bottom: var(--spacing-lg); font-size: 1.25rem;">🎯 교육 과정</h4>
              <div style="background: var(--bg-secondary); padding: var(--spacing-lg); border-radius: var(--radius-md);">
                <div style="margin-bottom: var(--spacing-md); padding: var(--spacing-md); background: white; border-radius: var(--radius-sm);">
                  <strong>1단계: 기초 교육</strong><br>
                  <span style="color: var(--text-secondary);">안전교육, 기초 기술 습득</span>
                </div>
                <div style="margin-bottom: var(--spacing-md); padding: var(--spacing-md); background: white; border-radius: var(--radius-sm);">
                  <strong>2단계: 심화 교육</strong><br>
                  <span style="color: var(--text-secondary);">전문 기술 훈련, 자격증 취득</span>
                </div>
                <div style="padding: var(--spacing-md); background: white; border-radius: var(--radius-sm);">
                  <strong>3단계: 실무 적용</strong><br>
                  <span style="color: var(--text-secondary);">독립적 업무 수행, 프로젝트 참여</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card mb-2">
        <div class="card-header">
          <h3 class="card-title">🏆 울산공고 도제반의 성과</h3>
        </div>
        <div class="card-body">
          <div class="dashboard-grid">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: var(--spacing-xl); border-radius: var(--radius-lg); text-align: center;">
              <div style="font-size: 0.875rem; opacity: 0.9; margin-bottom: var(--spacing-sm);">취업률</div>
              <div style="font-size: 3rem; font-weight: 700; margin-bottom: var(--spacing-xs);">100%</div>
              <div style="font-size: 0.875rem; opacity: 0.8;">전원 취업 달성</div>
            </div>
            
            <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: var(--spacing-xl); border-radius: var(--radius-lg); text-align: center;">
              <div style="font-size: 0.875rem; opacity: 0.9; margin-bottom: var(--spacing-sm);">협약 기업</div>
              <div style="font-size: 3rem; font-weight: 700; margin-bottom: var(--spacing-xs);">40개</div>
              <div style="font-size: 0.875rem; opacity: 0.8;">울산 지역 우수 기업</div>
            </div>
            
            <div style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: white; padding: var(--spacing-xl); border-radius: var(--radius-lg); text-align: center;">
              <div style="font-size: 0.875rem; opacity: 0.9; margin-bottom: var(--spacing-sm);">평균 자격증</div>
              <div style="font-size: 3rem; font-weight: 700; margin-bottom: var(--spacing-xs);">2.8개</div>
              <div style="font-size: 0.875rem; opacity: 0.8;">1인당 취득 자격증</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card" style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border: 2px solid var(--primary-blue);">
        <div class="card-body" style="text-align: center; padding: var(--spacing-2xl);">
          <h3 style="color: var(--primary-blue); font-size: 1.5rem; margin-bottom: var(--spacing-lg);">
            🌟 미래를 준비하는 가장 확실한 방법
          </h3>
          <p style="font-size: 1.125rem; color: var(--text-secondary); margin-bottom: var(--spacing-xl);">
            울산공업고등학교 도제반에서 여러분의 꿈을 현실로 만들어보세요!
          </p>
          <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap;">
            <span class="badge badge-info" style="font-size: 1rem; padding: var(--spacing-sm) var(--spacing-lg);">실무 중심 교육</span>
            <span class="badge badge-success" style="font-size: 1rem; padding: var(--spacing-sm) var(--spacing-lg);">100% 취업 보장</span>
            <span class="badge badge-warning" style="font-size: 1rem; padding: var(--spacing-sm) var(--spacing-lg);">전문 기술 습득</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Home/Dashboard Page
function renderHomePage() {
  const totalStudents = window.AppData.getTotalStudents();
  const grade3Students = window.AppData.students.filter(s => s.grade === 3).length;
  const grade2Students = window.AppData.students.filter(s => s.grade === 2).length;
  const employmentRate = ((totalStudents / totalStudents) * 100).toFixed(1);

  return `
    <h2 class="page-title">대시보드</h2>
    
    <div class="dashboard-grid">
      ${createStatCard('전체 학생', totalStudents + '명', '도제반 전체 인원', '👥')}
      ${createStatCard('3학년', grade3Students + '명', '4반 20명, 5반 18명', '🎓')}
      ${createStatCard('2학년', grade2Students + '명', '4반 19명, 5반 20명', '📚')}
      ${createStatCard('취업 배치율', employmentRate + '%', '전체 학생 기업 배치 완료', '💼')}
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-xl); margin-bottom: var(--spacing-2xl);">
      ${createEmploymentChart()}
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">📢 최근 공지사항</h3>
        </div>
        <div class="card-body">
          ${window.AppData.notices.slice(0, 5).map(notice => `
            <div style="padding: var(--spacing-md); border-bottom: 1px solid var(--border-color);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-xs);">
                <span class="badge ${notice.category === '긴급' ? 'badge-error' : 'badge-info'}">${notice.category}</span>
                <span style="font-size: 0.875rem; color: var(--text-muted);">${notice.date}</span>
              </div>
              <div style="font-weight: 500; color: var(--text-primary);">${notice.title}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">📊 학급별 현황</h3>
      </div>
      <div class="card-body">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-lg);">
          ${renderClassSummary(3, 4)}
          ${renderClassSummary(3, 5)}
          ${renderClassSummary(2, 4)}
          ${renderClassSummary(2, 5)}
        </div>
      </div>
    </div>
  `;
}

// Class summary card
function renderClassSummary(grade, classNum) {
  const students = window.AppData.getStudentsByClass(grade, classNum);
  const avgMerit = (students.reduce((sum, s) => sum + s.points.merit, 0) / students.length).toFixed(1);
  const avgCerts = (students.reduce((sum, s) => sum + s.certificates.length, 0) / students.length).toFixed(1);

  return `
    <div style="background: var(--bg-secondary); padding: var(--spacing-lg); border-radius: var(--radius-md);">
      <h4 style="color: var(--primary-blue); margin-bottom: var(--spacing-md);">${grade}학년 ${classNum}반</h4>
      <div style="color: var(--text-secondary);">
        <div style="margin-bottom: var(--spacing-sm);">👥 인원: ${students.length}명</div>
        <div style="margin-bottom: var(--spacing-sm);">⭐ 평균 상점: ${avgMerit}점</div>
        <div>📜 평균 자격증: ${avgCerts}개</div>
      </div>
    </div>
  `;
}

// Classes Page
function renderClassesPage() {
  return `
    <h2 class="page-title">학급 현황</h2>
    
    ${renderClassSection(3, 4)}
    ${renderClassSection(3, 5)}
    ${renderClassSection(2, 4)}
    ${renderClassSection(2, 5)}
  `;
}

function renderClassSection(grade, classNum) {
  const students = window.AppData.getStudentsByClass(grade, classNum);

  return `
    <div class="class-section">
      <div class="class-header">
        <h3 class="class-title">${grade}학년 ${classNum}반</h3>
        <p class="class-info">총 ${students.length}명 | 담임: ${students[0]?.contact.teacher || '미배정'}</p>
      </div>
      <div class="students-grid">
        ${students.map(student => createStudentCard(student)).join('')}
      </div>
    </div>
  `;
}

// Employment Page
function renderEmploymentPage() {
  const students = window.AppData.students;

  // Group by company
  const companyGroups = {};
  students.forEach(student => {
    const company = student.employment.company;
    if (!companyGroups[company]) {
      companyGroups[company] = [];
    }
    companyGroups[company].push(student);
  });

  return `
    <h2 class="page-title">취업 정보</h2>
    
    <div class="card mb-2">
      <div class="card-header">
        <h3 class="card-title">💼 기업별 배치 현황</h3>
      </div>
      <div class="card-body">
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>기업명</th>
                <th>업종</th>
                <th>주소</th>
                <th>배치 인원</th>
                <th>학생 명단</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries(companyGroups).map(([company, students]) => `
                <tr>
                  <td style="font-weight: 600;">${company}</td>
                  <td>${students[0].employment.industry}</td>
                  <td>${students[0].employment.address}</td>
                  <td><span class="badge badge-info">${students.length}명</span></td>
                  <td>${students.map(s => s.name).join(', ')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">📋 전체 학생 취업 현황</h3>
      </div>
      <div class="card-body">
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>이름</th>
                <th>학년/반</th>
                <th>기업명</th>
                <th>업종</th>
                <th>담당 멘토</th>
                <th>시작일</th>
              </tr>
            </thead>
            <tbody>
              ${students.map(student => `
                <tr onclick="showStudentProfile(${student.id})" style="cursor: pointer;">
                  <td style="font-weight: 600;">${student.name}</td>
                  <td>${student.grade}학년 ${student.class}반</td>
                  <td>${student.employment.company}</td>
                  <td>${student.employment.industry}</td>
                  <td>${student.employment.mentor.name} ${student.employment.mentor.position}</td>
                  <td>${student.employment.startDate}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// Certificates Page
function renderCertificatesPage() {
  const students = window.AppData.students;

  // Group by certificate
  const certGroups = {};
  students.forEach(student => {
    student.certificates.forEach(cert => {
      if (!certGroups[cert.name]) {
        certGroups[cert.name] = [];
      }
      certGroups[cert.name].push({
        student: student.name,
        grade: student.grade,
        class: student.class,
        date: cert.date
      });
    });
  });

  return `
    <h2 class="page-title">자격증 현황</h2>
    
    <div class="dashboard-grid mb-2">
      ${createStatCard('총 자격증 종류', Object.keys(certGroups).length + '개', '학생들이 취득한 자격증', '📜')}
      ${createStatCard('총 취득 건수', students.reduce((sum, s) => sum + s.certificates.length, 0) + '건', '전체 학생 자격증 합계', '⭐')}
      ${createStatCard('학생당 평균', (students.reduce((sum, s) => sum + s.certificates.length, 0) / students.length).toFixed(1) + '개', '1인당 평균 취득 자격증', '📊')}
    </div>
    
    ${Object.entries(certGroups).map(([certName, holders]) => `
      <div class="card mb-2">
        <div class="card-header">
          <h3 class="card-title">${certName}</h3>
          <span class="badge badge-info">${holders.length}명 취득</span>
        </div>
        <div class="card-body">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>학년/반</th>
                  <th>취득일</th>
                </tr>
              </thead>
              <tbody>
                ${holders.map(h => `
                  <tr>
                    <td>${h.student}</td>
                    <td>${h.grade}학년 ${h.class}반</td>
                    <td>${h.date}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `).join('')}
  `;
}

// Annual Events Page
function renderEventsPage() {
  const eventTypeColors = {
    '학사': 'badge-info',
    '도제': 'badge-success',
    '안전': 'badge-error',
    '행사': 'badge-warning',
    '자격증': '#8b5cf6',
    '평가': '#ec4899',
    '휴무': '#6b7280',
    '교육': '#3b82f6'
  };

  return `
    <h2 class="page-title">📅 도제부 연간 행사 계획</h2>
    
    <div class="card mb-2">
      <div class="card-header">
        <h3 class="card-title">2025학년도 연간 일정</h3>
      </div>
      <div class="card-body">
        <p style="color: var(--text-secondary); margin-bottom: var(--spacing-xl);">
          도제부의 연간 주요 행사 및 일정을 확인하실 수 있습니다. 학사 일정, 도제 프로그램, 자격증 시험, 평가회 등이 포함되어 있습니다.
        </p>
      </div>
    </div>
    
    ${window.AppData.annualEvents.map(monthData => `
      <div class="card mb-2">
        <div class="card-header" style="background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%); color: white;">
          <h3 style="color: white; font-size: 1.5rem;">${monthData.month}월 행사</h3>
        </div>
        <div class="card-body">
          <div style="display: grid; gap: var(--spacing-md);">
            ${monthData.events.map(event => `
              <div style="background: var(--bg-secondary); padding: var(--spacing-lg); border-radius: var(--radius-md); border-left: 4px solid var(--primary-blue);">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-sm);">
                  <div>
                    <span class="badge ${eventTypeColors[event.type] || 'badge-info'}" style="margin-bottom: var(--spacing-sm);">${event.type}</span>
                    <h4 style="font-size: 1.125rem; font-weight: 600; color: var(--text-primary);">${event.title}</h4>
                  </div>
                  <div style="color: var(--primary-blue); font-weight: 600; white-space: nowrap; margin-left: var(--spacing-lg);">${event.date}</div>
                </div>
                <p style="color: var(--text-secondary); margin: 0;">${event.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('')}
  `;
}

// Monthly Calendar Page
function renderCalendarPage() {
  const currentMonth = new Date().getMonth() + 1;
  const monthData = window.AppData.getEventsByMonth(currentMonth);

  const monthNames = ['', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  return `
    <h2 class="page-title">📆 월별 행사 캘린더</h2>
    
    <div class="card mb-2">
      <div class="card-header">
        <h3 class="card-title">월별 보기</h3>
      </div>
      <div class="card-body">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: var(--spacing-md); margin-bottom: var(--spacing-xl);">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => `
            <button 
              class="btn ${month === currentMonth ? 'btn-primary' : 'btn-secondary'}" 
              onclick="loadMonthCalendar(${month})"
              style="padding: var(--spacing-md);"
            >
              ${monthNames[month]}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
    
    <div id="monthCalendarContent">
      ${renderMonthCalendar(currentMonth)}
    </div>
  `;
}

function renderMonthCalendar(month) {
  const monthData = window.AppData.getEventsByMonth(month);
  const monthNames = ['', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  if (!monthData) {
    return `
      <div class="card">
        <div class="card-body" style="text-align: center; padding: var(--spacing-2xl);">
          <p style="color: var(--text-muted);">해당 월의 행사가 없습니다.</p>
        </div>
      </div>
    `;
  }

  const eventTypeColors = {
    '학사': '#3b82f6',
    '도제': '#10b981',
    '안전': '#ef4444',
    '행사': '#f59e0b',
    '자격증': '#8b5cf6',
    '평가': '#ec4899',
    '휴무': '#6b7280',
    '교육': '#0ea5e9'
  };

  return `
    <div class="card">
      <div class="card-header" style="background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%); color: white;">
        <h3 style="color: white; font-size: 1.75rem;">${monthNames[month]} 행사 일정</h3>
      </div>
      <div class="card-body">
        <div style="display: grid; gap: var(--spacing-lg);">
          ${monthData.events.map(event => `
            <div style="display: grid; grid-template-columns: 120px 1fr; gap: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-secondary); border-radius: var(--radius-md); border-left: 4px solid ${eventTypeColors[event.type] || '#3b82f6'};">
              <div style="text-align: center;">
                <div style="background: ${eventTypeColors[event.type] || '#3b82f6'}; color: white; padding: var(--spacing-sm); border-radius: var(--radius-sm); margin-bottom: var(--spacing-sm);">
                  <div style="font-size: 0.75rem; opacity: 0.9;">날짜</div>
                  <div style="font-size: 1.125rem; font-weight: 700;">${event.date}</div>
                </div>
                <span class="badge" style="background: ${eventTypeColors[event.type] || '#3b82f6'}; color: white;">${event.type}</span>
              </div>
              <div>
                <h4 style="font-size: 1.25rem; font-weight: 600; color: var(--text-primary); margin-bottom: var(--spacing-sm);">${event.title}</h4>
                <p style="color: var(--text-secondary); margin: 0;">${event.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Helper function for calendar month switching
function loadMonthCalendar(month) {
  const content = document.getElementById('monthCalendarContent');
  if (content) {
    content.innerHTML = renderMonthCalendar(month);
  }
}

// Teachers Page
function renderTeachersPage() {
  const headTeacher = window.AppData.getTeachersByRole('부장');
  const homeroomTeachers = window.AppData.getTeachersByRole('담임');
  const coordinators = window.AppData.getTeachersByRole('전담관');

  return `
    <h2 class="page-title">👨‍🏫 도제부 교사 소개</h2>
    
    <div class="card mb-2">
      <div class="card-header">
        <h3 class="card-title">도제부 구성</h3>
      </div>
      <div class="card-body">
        <div class="dashboard-grid">
          <div style="background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%); color: white; padding: var(--spacing-xl); border-radius: var(--radius-lg); text-align: center;">
            <div style="font-size: 0.875rem; opacity: 0.9; margin-bottom: var(--spacing-sm);">도제부장</div>
            <div style="font-size: 3rem; font-weight: 700; margin-bottom: var(--spacing-xs);">1명</div>
            <div style="font-size: 0.875rem; opacity: 0.8;">총괄 책임</div>
          </div>
          
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: var(--spacing-xl); border-radius: var(--radius-lg); text-align: center;">
            <div style="font-size: 0.875rem; opacity: 0.9; margin-bottom: var(--spacing-sm);">담임교사</div>
            <div style="font-size: 3rem; font-weight: 700; margin-bottom: var(--spacing-xs);">4명</div>
            <div style="font-size: 0.875rem; opacity: 0.8;">학급 운영</div>
          </div>
          
          <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: var(--spacing-xl); border-radius: var(--radius-lg); text-align: center;">
            <div style="font-size: 0.875rem; opacity: 0.9; margin-bottom: var(--spacing-sm);">전담관</div>
            <div style="font-size: 3rem; font-weight: 700; margin-bottom: var(--spacing-xs);">3명</div>
            <div style="font-size: 0.875rem; opacity: 0.8;">행정 지원</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Department Head -->
    <div class="card mb-2">
      <div class="card-header" style="background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%); color: white;">
        <h3 style="color: white;">👔 도제부장</h3>
      </div>
      <div class="card-body">
        ${headTeacher.map(teacher => createTeacherCard(teacher, true)).join('')}
      </div>
    </div>
    
    <!-- Homeroom Teachers -->
    <div class="card mb-2">
      <div class="card-header" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white;">
        <h3 style="color: white;">👨‍🏫 담임교사</h3>
      </div>
      <div class="card-body">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: var(--spacing-lg);">
          ${homeroomTeachers.map(teacher => createTeacherCard(teacher, false)).join('')}
        </div>
      </div>
    </div>
    
    <!-- Coordinators -->
    <div class="card">
      <div class="card-header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white;">
        <h3 style="color: white;">💼 전담관</h3>
      </div>
      <div class="card-body">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: var(--spacing-lg);">
          ${coordinators.map(teacher => createTeacherCard(teacher, false)).join('')}
        </div>
      </div>
    </div>
  `;
}

function createTeacherCard(teacher, isLarge) {
  return `
    <div style="background: var(--bg-secondary); padding: var(--spacing-xl); border-radius: var(--radius-lg); ${isLarge ? '' : ''}">
      <div style="display: grid; grid-template-columns: ${isLarge ? '200px' : '150px'} 1fr; gap: var(--spacing-xl);">
        <div>
          <div style="width: 100%; aspect-ratio: 1; border-radius: var(--radius-md); background: var(--bg-tertiary); overflow: hidden; margin-bottom: var(--spacing-md);">
            <img src="${teacher.photo}" alt="${teacher.name}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="text-align: center;">
            <div style="font-size: ${isLarge ? '1.5rem' : '1.25rem'}; font-weight: 700; color: var(--text-primary); margin-bottom: var(--spacing-xs);">${teacher.name}</div>
            <div style="color: var(--primary-blue); font-weight: 600; margin-bottom: var(--spacing-sm);">${teacher.position}</div>
            ${teacher.class ? `<div style="color: var(--text-secondary); font-size: 0.875rem;">${teacher.class}</div>` : ''}
          </div>
        </div>
        
        <div>
          <div style="margin-bottom: var(--spacing-lg);">
            <h4 style="color: var(--primary-blue); font-size: 1.125rem; margin-bottom: var(--spacing-md);">📋 담당 업무</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              ${teacher.responsibilities.map(resp => `
                <li style="padding: var(--spacing-xs) 0; color: var(--text-secondary);">
                  <span style="color: var(--primary-blue); margin-right: var(--spacing-sm);">•</span>${resp}
                </li>
              `).join('')}
            </ul>
          </div>
          
          <div style="margin-bottom: var(--spacing-lg);">
            <h4 style="color: var(--primary-blue); font-size: 1.125rem; margin-bottom: var(--spacing-md);">💬 소개</h4>
            <p style="color: var(--text-secondary); line-height: 1.6; margin: 0;">${teacher.introduction}</p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-md);">
            <div style="background: white; padding: var(--spacing-md); border-radius: var(--radius-sm);">
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: var(--spacing-xs);">전공 분야</div>
              <div style="font-weight: 600; color: var(--text-primary);">${teacher.subject}</div>
            </div>
            <div style="background: white; padding: var(--spacing-md); border-radius: var(--radius-sm);">
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: var(--spacing-xs);">경력</div>
              <div style="font-weight: 600; color: var(--text-primary);">${teacher.experience}</div>
            </div>
            <div style="background: white; padding: var(--spacing-md); border-radius: var(--radius-sm);">
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: var(--spacing-xs);">연락처</div>
              <div style="font-weight: 600; color: var(--text-primary);">${teacher.phone}</div>
            </div>
            <div style="background: white; padding: var(--spacing-md); border-radius: var(--radius-sm);">
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: var(--spacing-xs);">이메일</div>
              <div style="font-weight: 600; color: var(--text-primary); font-size: 0.875rem;">${teacher.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Teacher Log Page
function renderTeacherLogPage() {
  return `
    <h2 class="page-title">교사 관리</h2>
    
    <div style="display: grid; gap: var(--spacing-xl);">
      <!-- Attendance Management -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">📅 출석 관리</h3>
          <button class="btn btn-primary">출석 입력</button>
        </div>
        <div class="card-body">
          <p style="color: var(--text-secondary); margin-bottom: var(--spacing-lg);">
            학생별 출석 현황을 조회하고 관리할 수 있습니다. 학교 출석과 기업 출근을 별도로 관리합니다.
          </p>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">오늘 출석률</div>
              <div class="info-value" style="color: var(--success);">98.7%</div>
            </div>
            <div class="info-item">
              <div class="info-label">지각</div>
              <div class="info-value" style="color: var(--warning);">1명</div>
            </div>
            <div class="info-item">
              <div class="info-label">결석</div>
              <div class="info-value" style="color: var(--error);">0명</div>
            </div>
            <div class="info-item">
              <div class="info-label">현장실습</div>
              <div class="info-value" style="color: var(--info);">76명</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Points Management -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">⭐ 상벌점 관리</h3>
          <button class="btn btn-primary">점수 부여</button>
        </div>
        <div class="card-body">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>학년/반</th>
                  <th>상점</th>
                  <th>벌점</th>
                  <th>총점</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                ${window.AppData.students.slice(0, 10).map(student => {
    const total = student.points.merit - student.points.demerit;
    return `
                    <tr>
                      <td>${student.name}</td>
                      <td>${student.grade}학년 ${student.class}반</td>
                      <td><span class="badge badge-success">${student.points.merit}</span></td>
                      <td><span class="badge badge-error">${student.points.demerit}</span></td>
                      <td style="font-weight: 600; color: ${total >= 0 ? 'var(--success)' : 'var(--error)'};">
                        ${total >= 0 ? '+' : ''}${total}
                      </td>
                      <td><button class="btn btn-secondary" style="padding: var(--spacing-xs) var(--spacing-md);">수정</button></td>
                    </tr>
                  `;
  }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <!-- Consultation Log -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">💬 상담 기록</h3>
          <button class="btn btn-primary">상담 추가</button>
        </div>
        <div class="card-body">
          <p style="color: var(--text-secondary);">
            학생 상담 내역을 기록하고 관리합니다. 학생 프로필에서 상세 내역을 확인할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  `;
}

// Notices Page
function renderNoticesPage() {
  return `
    <h2 class="page-title">공지사항</h2>
    
    <div style="margin-bottom: var(--spacing-xl);">
      <button class="btn btn-primary">📝 새 공지 작성</button>
    </div>
    
    <div style="display: grid; gap: var(--spacing-lg);">
      ${window.AppData.notices.map(notice => createNoticeCard(notice)).join('')}
    </div>
  `;
}

// Correspondence Page
function renderCorrespondencePage() {
  return `
    <h2 class="page-title">가정통신문</h2>
    
    <div style="margin-bottom: var(--spacing-xl);">
      <button class="btn btn-primary">📄 새 가정통신문 작성</button>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">📋 가정통신문 목록</h3>
      </div>
      <div class="card-body">
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>발송일</th>
                <th>제목</th>
                <th>대상 학급</th>
                <th>상태</th>
                <th>확인 현황</th>
              </tr>
            </thead>
            <tbody>
              ${window.AppData.correspondence.map(item => createCorrespondenceRow(item)).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ===== MODAL FUNCTIONS =====

function showStudentProfile(studentId) {
  const student = window.AppData.getStudentById(studentId);
  if (!student) return;

  const modal = document.getElementById('studentModal');
  const modalBody = document.getElementById('modalBody');
  const modalName = document.getElementById('modalStudentName');

  modalName.textContent = student.name + ' - 상세 정보';
  modalBody.innerHTML = createStudentProfile(student);

  modal.classList.add('active');
}

function closeStudentModal() {
  const modal = document.getElementById('studentModal');
  modal.classList.remove('active');
}

// Close modal when clicking outside
document.addEventListener('click', function (e) {
  const modal = document.getElementById('studentModal');
  if (e.target === modal) {
    closeStudentModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeStudentModal();
  }
});
