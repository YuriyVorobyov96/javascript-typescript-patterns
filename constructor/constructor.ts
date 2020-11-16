class Server {
  name: string;
  ip: string;

  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl(): string {
    return `https://${this.ip}:80`;
  }
}

const aws = new Server('AWS', '82.11.11.32');

console.log(aws.getUrl())