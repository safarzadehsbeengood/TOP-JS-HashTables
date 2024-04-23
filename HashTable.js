import Bucket from './Bucket.js';

export default class HashTable {
  constructor(buckets) {
    this.table = new Array(buckets);
    this.buckets = buckets;
    this.size = 0;
  }

   hash(key) {
    let hashCode = 0; 
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
     hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets;
    }
    return hashCode;
 } 

  set(key, value) {
    const hashCode = this.hash(key);
    // if the bucket is empty, create a new bucket and add the key-value pair
    if (!this.table[hashCode]) {
      this.table[hashCode] = Bucket();
      this.table[hashCode].add(key, value);
      this.size += 1;
    } else {
      // otherwise, add the key-value pair to the existing bucket
      const oldBucketSize = this.table[hashCode].size();
      this.table[hashCode].add(key, value);
      // if the bucket size increased, increment the size of the hash table
      this.size += this.table[hashCode].size() > oldBucketSize ? 1 : 0;
    }
  }

  get(key) {
    const code = this.hash(key);
    return this.table[code].find(key);
  }

  has(key) {
    const code = this.hash(key);
    return this.table[code].has(key);
  }

  remove(key) {
    const code = this.hash(key);
    if (this.table[code]) {
      const res = this.table[code].remove(key);
      if (res) {
        this.size -= 1;
        return true;
      } else {
        return false;
      }
    } else {
      return false; 
    }
  }

  length() { return this.size; }

  clear() {
    for (let i = 0; i < this.buckets; i++) {
      this.table[i] = undefined;
    }
    this.size = 0;
  }

  keys() {
    let res = [];
    for (let i = 0; i < this.buckets; i++) {
      if (this.table[i]) res.push(...this.table[i].keys());
    }
    return res;
  }

  values() {
    let res = [];
    for (let i = 0; i < this.buckets; i++) {
      if (this.table[i]) res.push(...this.table[i].values());
    }
    return res;
  }

  entries() {
    let res = [];
    for (let i = 0; i < this.buckets; i++) {
      if (this.table[i]) res.push(...this.table[i].entries());
    }
    return res;
  }
}
