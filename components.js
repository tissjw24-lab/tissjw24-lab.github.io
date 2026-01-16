// UI Components for Ulsan Technical High School Management System

// Dashboard Statistics Card
function createStatCard(label, value, subtitle, icon = '📊') {
    return `
    <div class="stat-card">
      <div class="stat-label">${icon} ${label}</div>
      <div class="stat-value">${value}</div>
      <div class="stat-subtitle">${subtitle}</div>
    </div>
  `;
}

// Student Card for Grid View
function createStudentCard(student) {
    return `
    <div class="student-card" onclick="showStudentProfile(${student.id})">
      <div class="student-photo">
        <img src="${student.photo}" alt="${student.name}">
      </div>
      <div class="student-name">${student.name}</div>
      <div class="student-class">${student.grade}학년 ${student.class}반</div>
      <div class="student-company">${student.employment.company}</div>
    </div>
  `;
}

// Student Profile Modal Content
function createStudentProfile(student) {
    const totalPoints = student.points.merit - student.points.demerit;
    const pointsColor = totalPoints >= 0 ? 'var(--success)' : 'var(--error)';

    return `
    <div class="profile-header">
      <div class="profile-photo">
        <img src="${student.photo}" alt="${student.name}">
      </div>
      <div class="profile-basic">
        <div class="profile-name">${student.name}</div>
        <div class="profile-class">${student.grade}학년 ${student.class}반</div>
      </div>
    </div>

    <!-- Contact Information -->
    <div class="profile-section">
      <h3 class="section-title">📞 연락처 정보</h3>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">본인</div>
          <div class="info-value">${student.contact.student}</div>
        </div>
        <div class="info-item">
          <div class="info-label">학부모</div>
          <div class="info-value">${student.contact.parent}</div>
        </div>
        <div class="info-item">
          <div class="info-label">담임교사</div>
          <div class="info-value">${student.contact.teacher}</div>
        </div>
        <div class="info-item">
          <div class="info-label">담임 연락처</div>
          <div class="info-value">${student.contact.teacherPhone}</div>
        </div>
      </div>
    </div>

    <!-- Employment Information -->
    <div class="profile-section">
      <h3 class="section-title">🏭 도제 현황</h3>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">기업체명</div>
          <div class="info-value">${student.employment.company}</div>
        </div>
        <div class="info-item">
          <div class="info-label">업종</div>
          <div class="info-value">${student.employment.industry}</div>
        </div>
        <div class="info-item">
          <div class="info-label">주소</div>
          <div class="info-value">${student.employment.address}</div>
        </div>
        <div class="info-item">
          <div class="info-label">시작일</div>
          <div class="info-value">${student.employment.startDate}</div>
        </div>
        <div class="info-item">
          <div class="info-label">담당 멘토</div>
          <div class="info-value">${student.employment.mentor.name} ${student.employment.mentor.position}</div>
        </div>
        <div class="info-item">
          <div class="info-label">멘토 연락처</div>
          <div class="info-value">${student.employment.mentor.phone}</div>
        </div>
      </div>
    </div>

    <!-- Certificates -->
    <div class="profile-section">
      <h3 class="section-title">📜 취득 자격증</h3>
      <div class="cert-list">
        ${student.certificates.map(cert => `
          <div class="cert-item">
            <div class="cert-name">${cert.name}</div>
            <div class="cert-date">${cert.date}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Merit/Demerit Points -->
    <div class="profile-section">
      <h3 class="section-title">⭐ 상벌점 현황</h3>
      <div class="points-summary">
        <div class="points-item">
          <div class="info-label">상점</div>
          <div class="points-value merit">${student.points.merit}점</div>
        </div>
        <div class="points-item">
          <div class="info-label">벌점</div>
          <div class="points-value demerit">${student.points.demerit}점</div>
        </div>
      </div>
      <div class="info-item">
        <div class="info-label">총점</div>
        <div class="info-value" style="color: ${pointsColor}; font-size: 1.5rem; font-weight: 700;">
          ${totalPoints >= 0 ? '+' : ''}${totalPoints}점
        </div>
      </div>
      <div class="mt-2">
        <h4 style="margin-bottom: var(--spacing-md); color: var(--text-secondary);">최근 기록</h4>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>날짜</th>
                <th>구분</th>
                <th>점수</th>
                <th>사유</th>
              </tr>
            </thead>
            <tbody>
              ${student.points.history.map(h => `
                <tr>
                  <td>${h.date}</td>
                  <td><span class="badge ${h.type === 'merit' ? 'badge-success' : 'badge-error'}">${h.type === 'merit' ? '상점' : '벌점'}</span></td>
                  <td>${h.amount}점</td>
                  <td>${h.reason}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Consultation History -->
    <div class="profile-section">
      <h3 class="section-title">💬 상담 기록</h3>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>날짜</th>
              <th>주제</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            ${student.consultations.map(c => `
              <tr>
                <td>${c.date}</td>
                <td>${c.topic}</td>
                <td>${c.notes}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Attendance Status -->
    <div class="profile-section">
      <h3 class="section-title">📅 출결 현황 (최근 30일)</h3>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>날짜</th>
              <th>학교 출석</th>
              <th>기업 출근</th>
            </tr>
          </thead>
          <tbody>
            ${student.attendance.slice(0, 10).map(a => `
              <tr>
                <td>${a.date}</td>
                <td><span class="badge ${getBadgeClass(a.school)}">${a.school}</span></td>
                <td><span class="badge ${getBadgeClass(a.company)}">${a.company}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Helper function for attendance badge colors
function getBadgeClass(status) {
    switch (status) {
        case '출석': return 'badge-success';
        case '지각': return 'badge-warning';
        case '결석': return 'badge-error';
        case '현장실습': return 'badge-info';
        default: return 'badge-info';
    }
}

// Employment Chart
function createEmploymentChart() {
    const grade3Rate = window.AppData.getEmploymentRate(3);
    const grade2Rate = window.AppData.getEmploymentRate(2);

    return `
    <div class="chart-container">
      <h3 class="card-title mb-2">학년별 취업률</h3>
      <div class="chart-wrapper">
        <canvas id="employmentChart"></canvas>
      </div>
    </div>
  `;
}

// Initialize employment chart
function initEmploymentChart() {
    const ctx = document.getElementById('employmentChart');
    if (!ctx) return;

    const grade3Rate = parseFloat(window.AppData.getEmploymentRate(3));
    const grade2Rate = parseFloat(window.AppData.getEmploymentRate(2));

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['3학년', '2학년'],
            datasets: [{
                label: '취업률 (%)',
                data: [grade3Rate, grade2Rate],
                backgroundColor: [
                    'rgba(37, 99, 235, 0.8)',
                    'rgba(59, 130, 246, 0.8)'
                ],
                borderColor: [
                    'rgba(37, 99, 235, 1)',
                    'rgba(59, 130, 246, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function (value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Notice Card
function createNoticeCard(notice) {
    const categoryColors = {
        '긴급': 'badge-error',
        '도제': 'badge-info',
        '일반': 'badge-success',
        '행사': 'badge-warning'
    };

    return `
    <div class="card">
      <div class="card-header">
        <div>
          <span class="badge ${categoryColors[notice.category]}">${notice.category}</span>
          <h3 class="card-title" style="margin-top: var(--spacing-sm);">${notice.title}</h3>
        </div>
        <div style="color: var(--text-muted); font-size: 0.875rem;">${notice.date}</div>
      </div>
      <div class="card-body">
        <p>${notice.content}</p>
        <div style="margin-top: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem;">
          작성자: ${notice.author}
        </div>
      </div>
    </div>
  `;
}

// Correspondence Table Row
function createCorrespondenceRow(item) {
    const statusColors = {
        '발송': 'badge-info',
        '확인': 'badge-success',
        '미확인': 'badge-warning'
    };

    const confirmRate = ((item.confirmCount / item.totalCount) * 100).toFixed(1);

    return `
    <tr>
      <td>${item.date}</td>
      <td>${item.title}</td>
      <td>${item.targetClasses.join(', ')}</td>
      <td><span class="badge ${statusColors[item.status]}">${item.status}</span></td>
      <td>${item.confirmCount} / ${item.totalCount} (${confirmRate}%)</td>
    </tr>
  `;
}
