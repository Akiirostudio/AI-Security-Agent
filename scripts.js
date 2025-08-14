// AI Security Agent - Advanced Security Monitoring System

class SecurityAgent {
    constructor() {
        this.startTime = Date.now();
        this.threats = [];
        this.metrics = {
            activeThreats: 0,
            blockedAttacks: 1247,
            scansToday: 2891,
            securityScore: 94
        };
        this.systemResources = {
            cpu: 45,
            memory: 62,
            disk: 78
        };
        this.networkTraffic = {
            incoming: 1.2,
            outgoing: 0.856
        };
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startRealTimeUpdates();
        this.updateUptime();
        this.simulateThreatDetection();
        this.initializeCharts();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('nav ul li a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Action buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.action-btn')) {
                const btn = e.target.closest('.action-btn');
                this.handleActionButton(btn);
            }
        });
    }

    handleActionButton(btn) {
        const action = btn.querySelector('span').textContent.toLowerCase();
        
        switch(action) {
            case 'run full scan':
                this.runFullScan();
                break;
            case 'update database':
                this.updateThreatDatabase();
                break;
            case 'backup system':
                this.backupSystem();
                break;
            case 'emergency lockdown':
                this.emergencyLockdown();
                break;
        }
    }

    startRealTimeUpdates() {
        // Update metrics every 5 seconds
        setInterval(() => {
            this.updateMetrics();
        }, 5000);

        // Update system resources every 3 seconds
        setInterval(() => {
            this.updateSystemResources();
        }, 3000);

        // Update network traffic every 2 seconds
        setInterval(() => {
            this.updateNetworkTraffic();
        }, 2000);
    }

    updateUptime() {
        setInterval(() => {
            const uptime = Date.now() - this.startTime;
            const hours = Math.floor(uptime / (1000 * 60 * 60));
            const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((uptime % (1000 * 60)) / 1000);
            
            document.getElementById('uptime').textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    updateMetrics() {
        // Simulate dynamic metric changes
        this.metrics.activeThreats = Math.max(0, this.metrics.activeThreats + (Math.random() > 0.7 ? 1 : -1));
        this.metrics.blockedAttacks += Math.floor(Math.random() * 3);
        this.metrics.scansToday += Math.floor(Math.random() * 5);
        this.metrics.securityScore = Math.max(85, Math.min(100, this.metrics.securityScore + (Math.random() > 0.5 ? 1 : -1)));

        // Update DOM
        document.getElementById('active-threats').textContent = this.metrics.activeThreats;
        document.getElementById('blocked-attacks').textContent = this.metrics.blockedAttacks.toLocaleString();
        document.getElementById('scans-today').textContent = this.metrics.scansToday.toLocaleString();
        document.getElementById('security-score').textContent = this.metrics.securityScore;
    }

    updateSystemResources() {
        // Simulate resource fluctuations
        this.systemResources.cpu = Math.max(20, Math.min(90, this.systemResources.cpu + (Math.random() - 0.5) * 10));
        this.systemResources.memory = Math.max(30, Math.min(85, this.systemResources.memory + (Math.random() - 0.5) * 8));
        this.systemResources.disk = Math.max(70, Math.min(95, this.systemResources.disk + (Math.random() - 0.5) * 5));

        // Update progress bars
        document.getElementById('cpu-usage').style.width = `${this.systemResources.cpu}%`;
        document.getElementById('memory-usage').style.width = `${this.systemResources.memory}%`;
        document.getElementById('disk-usage').style.width = `${this.systemResources.disk}%`;

        // Update percentage labels
        document.querySelectorAll('.resource-item .percentage').forEach((el, index) => {
            const values = [this.systemResources.cpu, this.systemResources.memory, this.systemResources.disk];
            el.textContent = `${Math.round(values[index])}%`;
        });
    }

    updateNetworkTraffic() {
        // Simulate network traffic changes
        this.networkTraffic.incoming = Math.max(0.5, this.networkTraffic.incoming + (Math.random() - 0.5) * 0.3);
        this.networkTraffic.outgoing = Math.max(0.3, this.networkTraffic.outgoing + (Math.random() - 0.5) * 0.2);

        // Update DOM
        document.getElementById('incoming-traffic').textContent = `${this.networkTraffic.incoming.toFixed(1)} GB/s`;
        document.getElementById('outgoing-traffic').textContent = `${this.networkTraffic.outgoing.toFixed(1)} GB/s`;
    }

    simulateThreatDetection() {
        const threatTypes = [
            {
                type: 'DDoS Attack',
                description: 'Multiple IP addresses attempting to flood the server',
                severity: 'high',
                icon: 'fas fa-exclamation-circle'
            },
            {
                type: 'Suspicious Login',
                description: 'Failed login attempt from unknown IP',
                severity: 'medium',
                icon: 'fas fa-user-secret'
            },
            {
                type: 'Malware Detection',
                description: 'Potential malware signature detected',
                severity: 'high',
                icon: 'fas fa-bug'
            },
            {
                type: 'Data Breach Attempt',
                description: 'Unauthorized access attempt to sensitive data',
                severity: 'high',
                icon: 'fas fa-shield-alt'
            },
            {
                type: 'Phishing Attempt',
                description: 'Suspicious email with malicious links detected',
                severity: 'medium',
                icon: 'fas fa-envelope'
            }
        ];

        // Simulate new threats every 10-30 seconds
        setInterval(() => {
            if (Math.random() > 0.7) {
                const threat = threatTypes[Math.floor(Math.random() * threatTypes.length)];
                this.addThreat(threat);
            }
        }, Math.random() * 20000 + 10000);
    }

    addThreat(threatData) {
        const threat = {
            ...threatData,
            id: Date.now(),
            timestamp: new Date(),
            status: Math.random() > 0.3 ? 'blocked' : 'investigating'
        };

        this.threats.unshift(threat);
        this.metrics.activeThreats++;
        this.updateThreatList();
        this.showNotification(threat);
    }

    updateThreatList() {
        const threatList = document.getElementById('threat-list');
        const maxThreats = 5;

        // Keep only the most recent threats
        this.threats = this.threats.slice(0, maxThreats);

        threatList.innerHTML = this.threats.map(threat => `
            <div class="threat-item ${threat.severity}">
                <div class="threat-icon">
                    <i class="${threat.icon}"></i>
                </div>
                <div class="threat-content">
                    <h4>${threat.type}</h4>
                    <p>${threat.description}</p>
                    <span class="threat-time">${this.getTimeAgo(threat.timestamp)}</span>
                </div>
                <div class="threat-status">
                    <span class="status-badge ${threat.status}">${threat.status.charAt(0).toUpperCase() + threat.status.slice(1)}</span>
                </div>
            </div>
        `).join('');
    }

    getTimeAgo(timestamp) {
        const now = new Date();
        const diff = Math.floor((now - timestamp) / 1000);

        if (diff < 60) return `${diff} seconds ago`;
        if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
        return `${Math.floor(diff / 86400)} days ago`;
    }

    showNotification(threat) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${threat.severity}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="${threat.icon}"></i>
                <div>
                    <h4>${threat.type}</h4>
                    <p>${threat.description}</p>
                </div>
                <button onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        // Add notification styles
        if (!document.getElementById('notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    padding: 1rem;
                    box-shadow: var(--shadow-lg);
                    z-index: 10000;
                    animation: slideIn 0.3s ease-out;
                    max-width: 400px;
                }
                .notification.high {
                    border-left: 4px solid var(--danger-color);
                }
                .notification.medium {
                    border-left: 4px solid var(--warning-color);
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .notification-content i {
                    font-size: 1.5rem;
                    color: var(--danger-color);
                }
                .notification-content h4 {
                    margin: 0;
                    color: var(--text-primary);
                }
                .notification-content p {
                    margin: 0.25rem 0 0;
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                }
                .notification-content button {
                    background: none;
                    border: none;
                    color: var(--text-muted);
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0;
                    margin-left: auto;
                }
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(styles);
        }

        document.body.appendChild(notification);

        // Remove notification after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    initializeCharts() {
        // Initialize network traffic chart
        const canvas = document.getElementById('networkCanvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            // Simple line chart for network traffic
            this.drawNetworkChart(ctx, canvas.width, canvas.height);
        }
    }

    drawNetworkChart(ctx, width, height) {
        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i <= 10; i++) {
            const y = (height / 10) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw traffic line
        ctx.strokeStyle = '#00d4ff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let i = 0; i < width; i++) {
            const x = i;
            const y = height - (Math.sin(i * 0.02 + Date.now() * 0.001) * 0.3 + 0.5) * height;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    }

    // Action Functions
    runFullScan() {
        this.showActionFeedback('Running full system scan...', 'primary');
        
        setTimeout(() => {
            this.metrics.scansToday += 1;
            this.updateMetrics();
            this.showActionFeedback('Full scan completed. No threats found.', 'success');
        }, 3000);
    }

    updateThreatDatabase() {
        this.showActionFeedback('Updating threat database...', 'secondary');
        
        setTimeout(() => {
            this.showActionFeedback('Threat database updated successfully.', 'success');
        }, 2000);
    }

    backupSystem() {
        this.showActionFeedback('Creating system backup...', 'warning');
        
        setTimeout(() => {
            this.showActionFeedback('System backup completed successfully.', 'success');
        }, 4000);
    }

    emergencyLockdown() {
        if (confirm('Are you sure you want to initiate emergency lockdown? This will block all external connections.')) {
            this.showActionFeedback('Emergency lockdown initiated...', 'danger');
            
            setTimeout(() => {
                this.showActionFeedback('Emergency lockdown active. All external connections blocked.', 'danger');
            }, 2000);
        }
    }

    showActionFeedback(message, type) {
        const feedback = document.createElement('div');
        feedback.className = `action-feedback ${type}`;
        feedback.textContent = message;

        // Add feedback styles
        if (!document.getElementById('feedback-styles')) {
            const styles = document.createElement('style');
            styles.id = 'feedback-styles';
            styles.textContent = `
                .action-feedback {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    padding: 1rem 2rem;
                    box-shadow: var(--shadow-lg);
                    z-index: 10000;
                    animation: fadeInOut 3s ease-in-out;
                }
                .action-feedback.primary { border-left: 4px solid var(--primary-color); }
                .action-feedback.secondary { border-left: 4px solid var(--secondary-color); }
                .action-feedback.warning { border-left: 4px solid var(--warning-color); }
                .action-feedback.danger { border-left: 4px solid var(--danger-color); }
                .action-feedback.success { border-left: 4px solid var(--success-color); }
                @keyframes fadeInOut {
                    0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                    20%, 80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }
            `;
            document.head.appendChild(styles);
        }

        document.body.appendChild(feedback);

        setTimeout(() => {
            if (feedback.parentElement) {
                feedback.remove();
            }
        }, 3000);
    }
}

// Initialize the Security Agent when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.securityAgent = new SecurityAgent();
});

// Global functions for action buttons
function runFullScan() {
    if (window.securityAgent) {
        window.securityAgent.runFullScan();
    }
}

function updateThreatDatabase() {
    if (window.securityAgent) {
        window.securityAgent.updateThreatDatabase();
    }
}

function backupSystem() {
    if (window.securityAgent) {
        window.securityAgent.backupSystem();
    }
}

function emergencyLockdown() {
    if (window.securityAgent) {
        window.securityAgent.emergencyLockdown();
    }
}
