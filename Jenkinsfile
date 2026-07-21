
pipeline {
    agent any
    parameters {
        choice(
            name: 'TEST_TYPE',
            choices: ['smoke', 'regression', 'all'],
            description: 'Select the test suite to execute'
        )
    }
    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }
        stage('Execute Tests') {
            steps {
                script {
                    if (params.TEST_TYPE == 'smoke') {
                        bat 'npx playwright test --grep "@smoke"'
                    } else if (params.TEST_TYPE == 'regression') {
                        bat 'npx playwright test --grep "@regression"'
                    } else {
                        bat 'npx playwright test'
                    }
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
        success {
            echo 'Tests executed successfully.'
        }

        failure {
            echo 'Test execution failed.'
        }
    }
}