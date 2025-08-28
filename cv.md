---
layout: default
title: Curriculum Vitae
permalink: /cv/
---
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.4;
        color: #333;
        background: #f5f5f5;
        margin: 0;
        padding: 40px 20px;
        min-height: 100vh;
    }

    .page-container {
        max-width: 210mm;
        width: 100%;
        min-height: 297mm;
        background: white;
        margin: 0 auto;
        padding: 20mm;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    .header {
        text-align: center;
        padding-bottom: 8px;
        margin-bottom: 25px;
    }

    .name {
        font-size: 28px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 8px;
        color: #1a1a1a;
    }

    .position-title {
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #1a1a1a;
        border-bottom: 2px solid #1a1a1a;
        width: fit-content;
        text-align: center;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 16px;
    }

    .contact-info {
        font-size: 12px;
        line-height: 1.4;
        font-weight: 400;
        color: #555;
    }

    .section {
        margin-bottom: 20px;
    }

    .section-title {
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-bottom: 2px solid #1a1a1a;
        margin-bottom: 12px;
        padding-bottom: 4px;
        color: #1a1a1a;
    }

    .entry {
        margin-bottom: 12px;
    }

    .entry-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 3px;
        flex-wrap: wrap;
        gap: 8px;
    }

    .position {
        font-weight: 600;
        font-size: 13px;
        color: #1a1a1a;
    }

    .company {
        font-style: italic;
        font-size: 13px;
        color: #1a1a1a;
        font-weight: 500;
    }

    .date {
        font-size: 12px;
        font-style: italic;
        color: #666;
        font-weight: 400;
        white-space: nowrap;
    }

    .description {
        font-size: 12px;
        margin-left: 15px;
        font-weight: 400;
        color: #1a1a1a;
    }

    .description ul {
        list-style-type: disc;
        margin-left: 15px;
    }

    .description li {
        margin-bottom: 2px;
    }

    .skills-grid {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 16px;
        font-size: 12px;
    }

    .skill-category {
        margin-bottom: 10px;
    }

    .skill-category strong {
        font-size: 12px;
        font-weight: 600;
        color: #1a1a1a;
    }

    .project-header {
        font-weight: 600;
        font-size: 13px;
        margin-bottom: 4px;
        color: #1a1a1a;
    }

    .project-details {
        font-size: 12px;
        margin-left: 15px;
        line-height: 1.4;
        color: #1a1a1a;
    }

    .tech-stack {
        font-style: italic;
        margin-bottom: 4px;
        color: #1a1a1a;
        font-weight: 500;
    }

    .link {
        font-style: italic;
        color: #1a1a1a;
        word-break: break-all;
    }

    /* Tablet styles */
    @media screen and (max-width: 768px) {
        body {
            padding: 20px 15px;
        }

        .page-container {
            padding: 20px;
            min-height: auto;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .name {
            font-size: 24px;
            letter-spacing: 1px;
        }

        .position-title {
            font-size: 16px;
            letter-spacing: 1px;
        }

        .section-title {
            font-size: 14px;
        }

        .skills-grid {
            grid-template-columns: 1fr;
            gap: 4px;
        }

        .skills-grid>div:nth-child(odd) {
            font-weight: 600;
            margin-top: 12px;
            margin-bottom: 4px;
        }

        .description {
            margin-left: 10px;
        }

        .description ul {
            margin-left: 10px;
        }

        .project-details {
            margin-left: 10px;
        }
    }

    /* Mobile styles */
    @media screen and (max-width: 480px) {
        body {
            padding: 10px 8px;
        }

        .page-container {
            padding: 15px;
            border-radius: 4px;
        }

        .name {
            font-size: 20px;
            letter-spacing: 0.5px;
            line-height: 1.2;
        }

        .position-title {
            font-size: 14px;
            letter-spacing: 0.5px;
        }

        .contact-info {
            font-size: 11px;
            line-height: 1.5;
        }

        .section {
            margin-bottom: 16px;
        }

        .section-title {
            font-size: 13px;
            letter-spacing: 0.5px;
        }

        .entry-header {
            /* flex-direction: column; */
            align-items: flex-start;
            gap: 4px;
        }

        .date {
            align-self: flex-end;
            margin-top: -4px;
        }

        .position,
        .company {
            font-size: 12px;
        }

        .description {
            font-size: 11px;
            margin-left: 8px;
        }

        .description ul {
            margin-left: 8px;
        }

        .project-header {
            font-size: 12px;
            line-height: 1.3;
        }

        .project-details {
            font-size: 11px;
            margin-left: 8px;
        }

        .tech-stack {
            font-size: 11px;
            line-height: 1.3;
        }

        .skills-grid {
            font-size: 11px;
        }

        .link {
            font-size: 11px;
            word-break: break-word;
            display: inline-block;
            max-width: 100%;
        }
    }

    /* Very small screens */
    @media screen and (max-width: 320px) {
        .page-container {
            padding: 12px;
        }

        .name {
            font-size: 18px;
        }

        .position-title {
            font-size: 13px;
        }

        .contact-info {
            font-size: 10px;
        }

        .section-title {
            font-size: 12px;
        }

        .position,
        .company {
            font-size: 11px;
        }

        .description,
        .project-details {
            font-size: 10px;
        }

        .tech-stack {
            font-size: 10px;
        }
    }

    /* Print styles */
    @media print {
        body {
            background: white;
            padding: 0;
        }

        .page-container {
            box-shadow: none;
            border-radius: 0;
            padding: 15mm;
            max-width: none;
            width: 100%;
        }

        .link {
            color: #1a1a1a !important;
            text-decoration: underline;
        }
    }
</style>
<div class="page-container">
    <div class="header">
        <div class="name">Nguyen Manh Cuong</div>
        <div class="position-title">Backend Developer</div>
        <div class="contact-info">
            My Dinh, Nam Tu Liem, Hanoi, Vietnam<br>
            Phone: +84 346 795 326 | Email: thiuyen1132004@gmail.com
        </div>
        <div class="contact-info">
            Portfolio: <a class="link" href="https://portfolio.uyenlun.com"
                target="_blank">https://portfolio.uyenlun.com</a>
        </div>
    </div>
    <div class="section">
        <div class="section-title">Education</div>
        <div class="entry">
            <div class="entry-header">
                <div>
                    <span class="company">FPT Polytechnic College</span>
                </div>
                <div class="date">Aug 2022 - Jan 2025</div>
            </div>
            <div class="description">
                • GPA: 3.56/4.0<br>
                • Graduated with distinction with a Bachelor's degree in Information Technology.
            </div>
        </div>
    </div>
    <div class="section">
        <div class="section-title">Professional Experience</div>
        <div class="entry">
            <div class="entry-header">
                <div>
                    <span class="position">Backend Developer</span><br>
                    <span class="company">MST Entertainment</span>
                </div>
                <div class="date">April 2024 - Present</div>
            </div>
            <div class="description">
                <ul>
                    <li>Developed and optimized RESTful APIs using Express.js.</li>
                    <li>Integrated MongoDB for efficient data storage and management across
                        multiple projects.</li>
                    <li>Implemented scalable microservices architecture using NestJS
                        framework.</li>
                    <li>Collaborated with frontend developers to ensure seamless API
                        integration and data flow.</li>
                    <li>Maintained comprehensive API documentation for internal development
                        team.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-grid">
            <div><strong>Programming Languages:</strong></div>
            <div>JavaScript, PHP, HTML5, CSS3</div>
            <div><strong>Frameworks & Libraries:</strong></div>
            <div>NestJS, Express.js, Laravel, NextJS</div>
            <div><strong>Databases:</strong></div>
            <div>MongoDB, MySQL, MS SQL Server, Redis</div>
            <div><strong>Tools & Technologies:</strong></div>
            <div>Git, GitHub, Docker basic, Socket.IO, GraphQL, Figma</div>
            <div><strong>Payment Integration:</strong></div>
            <div>Stripe, Cryptomus</div>
            <div><strong>Languages:</strong></div>
            <div>Vietnamese, English basic reading comprehension</div>
        </div>
    </div>
    <div class="section">
        <div class="section-title">Projects</div>
        <div class="entry">
            <div class="project-header">Pixelvox AI Content Creation Platform</div>
            <div class="project-details">
                <div class="tech-stack">Tech Stack: NextJS, ShadcnUI, MongoDB, Web2 | Team Size:
                    3</div>
                • Designed and implemented robust backend services supporting AI content
                generation functionalities<br>
                • Developed reusable service modules and maintained comprehensive internal API
                documentation<br>
                • Website: <a class="link" href="https://pixelvox.1ai.one"
                    target="_blank">https://pixelvox.1ai.one</a>
            </div>
        </div>
        <div class="entry">
            <div class="project-header">TopClick Web Service</div>
            <div class="project-details">
                <div class="tech-stack">Tech Stack: Node.js, Redis, MongoDB, Socket.IO,
                    Cryptomus, Stripe | Team Size: 6</div>
                • Developed RESTful APIs for authentication, order tracking, and analytics modules.
                <br>
                • Collaborated with frontend engineers to ensure smooth API integration and performance
                optimization.<br>
                • Designed data structures for social media services (YouTube, Facebook, TikTok,
                etc.) and implemented full order
                processing workflows.<br>
                • Optimized data handling with Redis caching for high-traffic content and MongoDB for persistent
                storage.<br>
                • Integrated payment gateways (Stripe, Cryptomus) and handled secure transaction processing.
                <br>
                • Implemented scheduled cron jobs for system statistics and data synchronization.
                <br>
                • Website: <a class="link" href="https://topclick.vn" target="_blank">https://topclick.vn</a>
            </div>
        </div>
        <div class="entry">
            <div class="project-header">Human Resource Management Web Application</div>
            <div class="project-details">
                <div class="tech-stack">Tech Stack: NestJS, MongoDB, GraphQL, NextJS, ShadcnUI |
                    Team Size: 3</div>
                • Built GraphQL APIs to efficiently handle complex data relationships such as
                employee–department–role mappings.<br>
                • Designed backend architecture for employee management modules including attendance tracking, leave
                requests, and
                approval workflows.<br>
                • Implemented role-based access control (RBAC) to manage different permission levels across the
                system.<br>
                • Optimized MongoDB schema and queries to ensure responsive and scalable data
                operations.<br>
                • Participated in code review and sprint planning to maintain code quality and meet
                release deadlines.<br>
                • Coordinated with UI/UX team to translate business requirements into technical
                solutions.
            </div>
        </div>
        <div class="entry">
            <div class="project-header">KeywordTool (Microservice Architecture)</div>
            <div class="project-details">
                <div class="tech-stack">Tech Stack: NestJS, Redis, MongoDB, Socket.IO, Stripe |
                    Team Size: 6</div>
                • Designed and implemented scalable backend services using microservice
                architecture.<br>
                • Decomposed complex features into independent modules for enhanced scalability
                and maintainability.<br>
                • Utilized Redis as message broker for asynchronous inter-service
                communication.<br>
                • Established service orchestration patterns for distributed system coordination.
            </div>
        </div>
    </div>
    <div class="section">
        <div class="section-title">Core Competencies</div>
        <div class="description">
            <strong>Technical:</strong> Backend Development, RESTful API Design, Database Design &
            Optimization, Microservices Architecture, System Integration<br><br>
            <strong>Professional:</strong> Problem Solving, Team Collaboration, Self-directed
            Learning, Time Management, Technical Documentation
        </div>
    </div>
</div>