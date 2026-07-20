// pipeline {
//     agent any

//     parameters {
//         choice(
//             name: 'TEST_TYPE',
//             choices: ['smoke', 'regression', 'all'],
//             description: 'Select the test suite to execute'
//         )
//     }

//     stages {

//         stage('Checkout') {
//             steps {
//                 git branch: 'feature/product-pos',
//                     url: 'https://github.com/Farheen-for/newframework_sales.git'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 bat '''
//                 cd RockersRepository
//                 npm install
//                 npx playwright install
//                 '''
//             }
//         }

//         stage('Execute Tests') {
//             steps {
//                 script {
//                     if (params.TEST_TYPE == 'smoke') {
//                         bat '''
//                         cd RockersRepository
//                         npx playwright test --grep "@smoke"
//                         '''
//                     }
//                     else if (params.TEST_TYPE == 'regression') {
//                         bat '''
//                         cd RockersRepository
//                         npx playwright test --grep "@regression"
//                         '''
//                     }
//                     else {
//                         bat '''
//                         cd RockersRepository
//                         npx playwright test
//                         '''
//                     }
//                 }
//             }
//         }
//     }

//     post {
//         always {
//             archiveArtifacts artifacts: 'RockersRepository/playwright-report/**', fingerprint: true
//         }

//         success {
//             echo 'Tests executed successfully.'
//         }

//         failure {
//             echo 'Test execution failed.'
//         }
//     }
// }
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
                dir('RockersRepository') {
                    bat 'npm install'
                    bat 'npx playwright install'
                }
            }
        }

        stage('Execute Tests') {
            steps {
                dir('RockersRepository') {
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
    }

    post {
        always {
            archiveArtifacts artifacts: 'RockersRepository/playwright-report/**', allowEmptyArchive: true
        }

        success {
            echo 'Tests executed successfully.'
        }

        failure {
            echo 'Test execution failed.'
        }
    }
}