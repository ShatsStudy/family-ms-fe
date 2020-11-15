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
      stage ('Build app') {
        steps{
          sh '$(npm bin)/ng build --prod --build-optimizer'
        }
      }
      stage ('test'){
        steps{
          sh ('./node_modules/karma/bin/karma start karma.conf.js')
        }
        post {
            always {
              junit "test-results.xml"
            }
        }
      }
  }

}