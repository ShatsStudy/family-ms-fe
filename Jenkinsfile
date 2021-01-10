pipeline {
  agent {
      docker {
          image 'node:12.19.0-alpine'
          args '-p 3000:3000'
      }
  }
  stages {
    stage('Build') {
        steps {
            sh 'npm install'
        }
    }
    // stage ('test'){
    //   steps{
    //     sh '$(npm bin)/ng test --progress false --watch false'
    //     echo 'generate test report **/dist/test-reports/*.xml'
    //     junit allowEmptyResults: false, testResults: '**/test-results.xml'
    //     echo 'end test & coverage'
    //   }
    // }
    // stage ('Build app') {
    //   steps{
    //     sh '$(npm bin)/ng build --prod --build-optimizer'
    //   }
    // }
  }

}