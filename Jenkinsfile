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
        echo 'Complete testing'
      }
    }
    stage ('Build app') {
      steps{
        sh '$(npm bin)/ng build --prod --build-optimizer'
      }
    }
  }
}