pipeline {
  agent {
      docker {
          image 'node:6-alpine'
          args '-p 3000:3000'
      }
  }
  stages {
      stage('Build') {
          steps {
              sh 'npm install'
          }
      }
      stage ('Npde version'){
        steps{
          sh 'node -v'
        }
      }
      stage ('Test'){
        steps{
          sh 'ng test'
        }
      }
      stage ('Code quality'){
        steps{
          sh 'ng lint'
        }
      }
      stage ('Build app') {
        steps{
          sh 'ng build --prod'
        }
      }
  }
}