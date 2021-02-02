#include <stdio.h> 

void swap(int* a, int* b);
int partition(int arr[], int low, int high);
void quickSort(int arr[], int low, int high);

int main() { 
    int arr[6] = {100, 99, 80, 70, 60, 80};

    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n-1);

    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high]; 
    int i = low -1;

    for (int j = low; j <= high -1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }

    swap(&arr[i +1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int indexPartition = partition(arr, low, high);

        quickSort(arr, low, indexPartition -1); // depois indexPartion
        quickSort(arr, indexPartition +1, high); // antes indexPartion
    }
}


void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}