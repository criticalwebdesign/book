# Errata

A list of issues found in the printed text of the book. 

If you find any typos, errors in code, or otherwise incorrect information, please feel free to file an [Issue](https://github.com/criticalwebdesign/book/issues) in GitHub. 



<!-- 

## Chapter 0

### Page xx - 

-->



## Chapter 1

### Page 41 - Codespaces Sync Error

When you have a repo open in Codespaces, you must sync your changes before making edits on Github.com. If you edit the same file in two places, you are likely to see an error while trying to push your commits. If you face this error in Codespaces you can run the following lines, one at a time, in Codespaces terminal:

```bash
gh auth status # Check that you are authenticated
git fetch
git rebase origin/main
git rebase —continue
git push
```



<!-- 

## Chapter 2

### Page xx - 

## Chapter 3

### Page xx - 

## Chapter 4

### Page xx - 

## Chapter 5

### Page xx - 

## Chapter 6

### Page xx - 

## Chapter 7

### Page xx - 

## Chapter 8

### Page xx - 

## Chapter 9

### Page xx - 

## Chapter 10

### Page xx - 

## Chapter 11

### Page xx -  -->

