#include <stdio.h>
#include <stdlib.h>


void printArray(int arr[], int size);
void merge(int arr[], int left, int mid, int right);
void mergeSort(int arr[], int left, int right);

int main(void) {
  int arr[] = {7, 4, 10, 8, 5, 7, 3};
  int n = sizeof(arr) / sizeof(arr[0]);

  mergeSort(arr, 0, n -1);
  printArray(arr, n);

}

void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]); 
  }

  printf("\n");
}

void merge(int arr[], int left, int mid, int right) {
  int pointL, pointR, pointA;
  int endL = mid - left +1;
  int endR = right - mid;

  int subLeft[endL], subRight[endR];

  for (pointL = 0; pointL < endL; pointL++)
    subLeft[pointL] = arr[left + pointL];
  for (pointR = 0; pointR < endR; pointR++)
    subRight[pointR] = arr[mid + 1 + pointR];

  pointL = pointR = 0; 
  pointA = left;

  while (pointL < endL && pointR < endR) {
    if (subLeft[pointL] <= subRight[pointR]) {
      arr[pointA] = subLeft[pointL];
      pointL++;
    } else {
      arr[pointA] = subRight[pointR];
      pointR++;
    } 
    pointA++;
  }

  while (pointL < endL) {
    arr[pointA] = subLeft[pointL];
    pointL++;
    pointA++;
  }

  while (pointR < endR) {
    arr[pointA] = subRight[pointR];
    pointR++;
    pointA++;
  }
}

void mergeSort(int arr[], int left, int right) {
  if (left < right) {
    int m = left + (right - left) / 2;

    mergeSort(arr, left, m);
    mergeSort(arr, m +1, right);

    merge(arr, left, m, right);
  }
}
