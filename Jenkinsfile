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
      stage ('test'){
        steps{
          sh '''
            $(npm bin)/ng test
          '''
        }
        post {
            always {
              junit "test-results.xml"
            }
        }
      }
      stage ('Code quality'){
        steps{
          sh '$(npm bin)/ng lint'
        }
      }
      stage ('Build app') {
        steps{
          sh '$(npm bin)/ng build --prod --build-optimizer'
        }
      }
  }

}