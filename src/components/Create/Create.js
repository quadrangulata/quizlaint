import {
  Input,
  Textarea,
  Spacer,
  Text,
  Button,
  Grid,
  Switch,
  Card,
  Link,
} from '@nextui-org/react';
import { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import classes from './Create.module.css';
import { MdKeyboardBackspace } from 'react-icons/md';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [isValidName, setIsValidName] = useState(true);
  const [isValidContent, setIsValidContent] = useState(true);
  const [firstExtract, setFirstExtract] = useState('	');
  const [secondExtract, setSecondExtract] = useState('\n');
  const [isReverse, setIsReverse] = useState(false);
  const [isSplit, setIsSplit] = useState(false);

  const nameRef = useRef();
  const contentRef = useRef();

  const navigate = useNavigate();

  const handleCreate = () => {
    const name = nameRef.current.value.trim();
    const content = contentRef.current.value.trim();

    setIsValidName(name.length > 0);
    setIsValidContent(content.length > 0);

    if (name.length > 0 && content.length > 0) {
      const list = content.split(secondExtract);
      const listObject = list.map((item) => {
        const [first, second] = item.split(firstExtract);
        const tFirst = first.trim();
        const tSecond = second.trim();
        return {
          i: nanoid(6),
          answer: tFirst.length < tSecond.length ? tFirst : tSecond,
          question: tFirst.length < tSecond.length ? tSecond : tFirst,
          learned: false,
        };
      });
      if (isSplit && listObject.length > 100) {
        let a = 0;
        for (let i = 0; i < listObject.length; i += 100) {
          const t = listObject.slice(i, i + 100);
          localStorage.setItem(
            nanoid(15),
            JSON.stringify({
              name: name + ` (Part ${a + 1})`,
              data: t,
              createdAt: new Date(),
              learnedAt: null,
            })
          );
          a++;
        }
      } else {
        // save to local storage
        localStorage.setItem(
          nanoid(15),
          JSON.stringify({
            name: name,
            data: listObject,
            createdAt: new Date(),
            learnedAt: null,
          })
        );
      }
    }
    navigate('/');
  };

  return (
    <div>
      <div>
        <Grid.Container>
          <Grid xs={3}>
            <Button
              auto
              color={'default'}
              icon={<MdKeyboardBackspace />}
              onPress={() => navigate('/')}
            >
              List course
            </Button>
          </Grid>
          <Grid xs={6}>
            <Text css={{ textAlign: 'center', width: '100%' }} h1 size={18}>
              Create set
            </Text>
          </Grid>
          <Grid xs={3}>
            <div className={classes.iconQuestion}>
              <Link
                href="/tutorial"
                target={'_blank'}
              >
                <BsFillQuestionCircleFill size={30} color="gray" />
              </Link>
            </div>
          </Grid>
        </Grid.Container>
      </div>
      <Spacer />
      <Card>
        <Card.Body>
          <Input
            status={isValidName ? 'default' : 'error'}
            css={{ width: '100%' }}
            label="Name of set"
            ref={nameRef}
          />
          <Spacer />
          <Textarea
            status={isValidContent ? 'default' : 'error'}
            css={{ width: '100%' }}
            label="Import set content"
            rows={15}
            ref={contentRef}
          />
        </Card.Body>
      </Card>
      <Spacer />
      <Button shadow onPress={handleCreate}>
        Create
      </Button>
    </div>
  );
};

export default Create;
