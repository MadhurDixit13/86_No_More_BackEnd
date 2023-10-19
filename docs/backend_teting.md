# Test Cases for Backend APIs

In this project, we have employed the Mocha and Chai Framework to comprehensively test the functionality of our backend APIs. 

Additionally, we have integrated nyc coverage to provide a clear overview of the test coverage, enhancing the understanding of each test's purpose and the extent of code coverage.


![image](https://github.com/drs1951/86_Backend/assets/57554284/c4d308d1-228c-45f4-b08d-9cd2ec770a97)

## How to run test cases

### 1. Run the following command to run all the test cases written. 

```
npm test
```

### 2. To see the analytics, 

1. Check if your package.json contains the nyc dependency. If not then run the following code and install it.

```
npm install --save-dev nyc
```
2. Then run the following code to generate the coverage files for the test cases.

```
npm run coverage
```

3. Run the index.html file that is just being added to your repository under the coverage folder. 

![image](https://github.com/drs1951/86_Backend/assets/57554284/f66ecff1-8b11-486f-9f61-e0bf4306dfa6)



These tests serve as a critical component in ensuring the robustness and reliability of our backend services, guaranteeing that they meet the specified requirements and perform as expected.
